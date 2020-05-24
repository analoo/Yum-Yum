import React, { useState, useEffect } from "react";
import API from "../utils/API.js"
import MainBody from "../components/Containers/mainBody";
import Card from "../components/Card/index";
import SearchBar from "../components/Search/Search-Bar"
import CardContainer from "../components/Card/CardContainer";
import CardRow from "../components/Card/CardRow"
import { useSessionContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, REMOVE_RECIPE, UPDATE_FAVORITE, LOADING } from "../utils/actions"

const MyRecipes = () => {
  // brings in global state : we are storing, search, global user id, favorites, user generated
  const [state, dispatch] = useSessionContext();

  // a local state variable will help us track what we display to the user
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [user, setUser] = userState({});

  function loadRecipes() {
    console.log(`Making a request as user: ${user.id}`)
    // API.getUserRecipes(state.user.id).then(res => {
    API.getAllRecipes().then(res => {
      setRecipes(res.data)
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    loadRecipes();
  }, [])


  function filterRecipes() {
    search.toLowerCase();
    console.log(recipes)
    let filter = recipes.filter(recipe => {
      let lcRecipe = recipe.name.toLowerCase();
      return lcRecipe.indexOf(search) >= 0;
    })
    console.log(filter)
  }


  return (
    <div>
      <MainBody >
        <SearchBar placeholder="Search for your recipes" setSearch={setSearch} onChange={filterRecipes()} />
        <CardContainer>
          <CardRow>
            {recipes.map(recipe => (
              <Card recipe={recipe} key={recipe.id} />
            ))}
          </CardRow>
        </CardContainer>
      </MainBody>
    </div>
  );
}

export default MyRecipes;
