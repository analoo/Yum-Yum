import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

import MainBody from "../components/Containers/mainBody"
import RecipeMain from "../components/Recipe/index"
import { useSessionContext } from "../utils/GlobalState";



const Details = (props) => {
    const [state,dispatch] = useSessionContext();

    useEffect(() => {
        API.getSingleRecipe(props.match.params.id)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }, []);

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