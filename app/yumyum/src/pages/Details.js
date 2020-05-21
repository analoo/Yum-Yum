import React, {useEffect, useState} from "react";
import MainBody from "../components/Containers/mainBody"
import RecipeMain from "../components/Recipe/index"
import API from "../utils/API"
import { useSessionContext } from "../utils/GlobalState";



const Details = (props) => {
    const [currentRecipe, setCurrentRecipe] = useState({})

    console.log(props.match.params.id)

    useEffect( () => {
        loadRecipes();
      }, [])

    function loadRecipes(){
        API.getSingleRecipe(props.params.match.id)
        .then(result => {
            setCurrentRecipe(result.data)
            console.log(result.data)})
        .catch(err => console.log(err))
    }
    

    


    return (
        <div>
            <MainBody>
                {currentRecipe === 0
                ? <h3>No Results</h3>
                :
                <RecipeMain />
                }
            </MainBody>
        </div>
    )
}

export default Details;