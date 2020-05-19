import React, {useState, useEffect} from "react";
import API from "../utils/API.js"
import MainBody from "../components/mainBody";
import Card from "../components/Card/Card"

function MyRecipes() {
  const [recipes, setRecipes] = useState([])


  function loadRecipes() {
    API.getAllRecipes({}).then(res => {
      setRecipes(res);
      console.log(recipes)
    }).catch(err => console.log(err))
  }

  useEffect( () => {
    loadRecipes();
  }, [])
  

  return (
    <div>
      <MainBody >
      {recipes.map(recipe => (
        <Card recipe = {recipe}/>
        ))}
      </MainBody>
    </div>
  );
}

export default MyRecipes;
