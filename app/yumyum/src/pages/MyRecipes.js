import React, {useState, useEffect} from "react";
import API from "../utils/API.js"
import MainBody from "../components/mainBody";
import Card from "../components/Card/index"

function MyRecipes() {
  const [recipes, setRecipes] = useState([])


  function loadRecipes() {
    API.getAllRecipes({}).then(res => {
      setRecipes(res.data);
      
    }).catch(err => console.log(err))
  }

  console.log(recipes)


  useEffect( () => {
    loadRecipes();
  }, [])
  

  return (
    <div>
      <MainBody >
      {recipes.map(recipe => (
        <Card recipe = {recipe} key={recipe.id}/>
        ))}
      </MainBody>
    </div>
  );
}

export default MyRecipes;
