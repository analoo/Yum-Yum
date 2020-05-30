import React, { useState, useEffect } from "react";
import API from "../utils/API.js"
import MainBody from "../components/Containers/mainBody";
import Card from "../components/Card/";
import CardContainer from "../components/Card/CardContainer";
import CardRow from "../components/Card/CardRow"
import SearchBar from "../components/Search/Search-Bar"
import { useSessionContext } from "../utils/GlobalState";

const Search = () => {

  // GlobalState
  const [state, dispatch] = useSessionContext();
  // const [user, setUser] = useState({});

  //Localstate
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  function loadRecipes() {

    console.log(`Getting User: ${state.user.id} Favorite Recipes`);

    API.getAllRecipes(state.user.id).then(res => {
      console.log(res);
      setRecipes(res.data)
    }).catch(err => console.log(err))

  }

  useEffect(() => {
    loadRecipes();
  }, [])

  return (
    <div>
      <MainBody >
        <SearchBar placeholder="Search for your recipes" setSearch={setSearch} />
        <CardContainer><CardRow>

          {recipes.map(recipe => (
            <Card recipe={recipe} key={recipe.id} />
          ))}

        </CardRow></CardContainer>
      </MainBody>
    </div>
  );
}


export default Search;
