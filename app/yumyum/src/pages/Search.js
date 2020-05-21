import React, { useState, useEffect } from "react";
import API from "../utils/API.js"
import MainBody from "../components/Containers/mainBody";
import Card from "../components/Card/index";
import SearchBar from "../components/Search/Search-Bar"
import { useSessionContext } from "../utils/GlobalState";

const Search = () => {
  // GlobalState
  const [state, dispatch] = useSessionContext();

  // Remove this line when USER is setting state.
  state.user.id = "1"

  //Localstate
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  function loadRecipes () {
    // console.log(`Getting User: ${state.user.id} Favorite Recipes`);
  
    API.getUserRecipes(state.user.id).then(res => {setRecipes(res.data)
    }).catch(err => console.log(err))
  }

  useEffect( () => {
    loadRecipes();
  }, [])

  return (
    <div>
      <MainBody >
        <SearchBar placeholder="Search for your recipes" setSearch={setSearch} />
        {recipes.map(recipe => (
          <Card recipe={recipe} key={recipe.id} />
        ))}
      </MainBody>
    </div>
  );
}
  

export default Search;
