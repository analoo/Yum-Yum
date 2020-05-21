import React, {useEffect, useState} from "react";
import API from "../utils/API";
import MainBody from "../components/Containers/mainBody"
import RecipeMain from "../components/Recipe/index"
import { useSessionContext } from "../utils/GlobalState";
import {SET_CURRENT_RECIPE} from "../utils/actions";



const Details = (props) => {
    const [state,dispatch] = useSessionContext();


    console.log(state.currentRecipe)

    return (
        <div>
            <MainBody>
                {!state.currentRecipe.id
                ? <h3>No Results</h3>
                :
                <RecipeMain />
                }
            </MainBody>
        </div>
    )
}

export default Details;