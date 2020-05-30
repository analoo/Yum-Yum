import React, { useState, useEffect } from "react";
import API from "../utils/API.js"
import MainBody from "../components/Containers/mainBody";
import Card from "../components/Card/index";
import SearchBar from "../components/Search/Search-Bar"
import CardContainer from "../components/Card/CardContainer";
import CardRow from "../components/Card/CardRow"
import { useSessionContext } from "../utils/GlobalState";
import { Link } from "react-router-dom";


const MyRecipes = () => {
  // brings in global state : we are storing, search, global user id, favorites, user generated
  const [state, dispatch] = useSessionContext();

  // a local state variable will help us track what we display to the user
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")

  function loadRecipes() {
    console.log(`Making a request as user: ${state.user.id}`)
    API.getUserRecipes(state.user.id)
    .then(res => {
      console.log(res);
      setRecipes(res.data);
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    loadRecipes();
    setSearch("");
  }, [])

  function titleSearch(e) {
    e.preventDefault();

    let filter = recipes.filter(recipe =>
          recipe.Recipe.name.toLowerCase().indexOf(search) >= 0
        );
        setRecipes(filter);
  }

  return (
    <div>
      <MainBody >
        <SearchBar placeholder="Search for your recipes" setSearch={setSearch} titleSearch={titleSearch}/>
        <div className="edit-recipe" style={{textAlign: "center", marginTop: "10px"}}>
            <Link to={"/add-Recipe/"}>
              <button type="button" className= "btn-primary">Add Recipe</button>
            </Link>
        </div>
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
