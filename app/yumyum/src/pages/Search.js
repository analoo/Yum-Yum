import React, { useState, useEffect } from "react";
import API from "../utils/API.js"
import MainBody from "../components/Containers/mainBody";
import Card from "../components/Card/index";
import SearchBar from "../components/Search/Search-Bar"
import { useSessionContext } from "../utils/GlobalState";



const Search = () => {
  // GlobalState
  const [state, dispatch] = useSessionContext();

  //Localstate
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  function getFavoriteRecipes () {
    console.log(`Getting User: ${state.user.id} Favorite Recipes`);
    API.get
  }


  return (
    <div>
      <MainBody >
        <SearchBar placeholder="Search for your recipes" setSearch={setSearch} onChange={filterRecipes()} />
        {recipes.map(recipe => (
          <Card recipe={recipe} key={recipe.id} />
        ))}
      </MainBody>
    </div>
  );
}
  

export default Search;
