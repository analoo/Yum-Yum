import React, {useState, useEffect} from "react";
import API from "../utils/API.js"
import MainBody from "../components/mainBody";

function MyRecipes() {
  const [recipes, setRecipes] = useState()


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
      <h1>My Recipes Page</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      </MainBody>
    </div>
  );
}

export default MyRecipes;
