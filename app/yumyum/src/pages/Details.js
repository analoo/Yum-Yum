import React from "react";
import MainBody from "../components/Containers/mainBody"
import RecipeMain from "../components/Recipe/index"
import { useSessionContext } from "../utils/GlobalState";



const Details = () => {
    const [state,dispatch] = useSessionContext();

    console.log(state.currentRecipe.id)

    return (
        <div>
            <MainBody>
                {!state.currentRecipe.id
                ? <h3>No Results</h3>
                :<RecipeMain />
                }
                
            </MainBody>
        </div>
    )
}

export default Details;