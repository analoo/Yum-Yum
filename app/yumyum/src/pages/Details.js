import React from "react";
import MainBody from "../components/Containers/mainBody"
import RecipeMain from "../components/Recipe/index"
import { useSessionContext } from "../utils/GlobalState";


const Details = () => {

    // const [state,dispatch] = useSessionContext();





    return (
        <div>
            <MainBody>
                <RecipeMain />

            </MainBody>
        </div>
    )
}

export default Details;