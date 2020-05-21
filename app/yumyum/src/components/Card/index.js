import React from "react";
import "./card.css"
import { Link } from "react-router-dom";
import { useSessionContext } from "../../utils/GlobalState";
import {SET_CURRENT_RECIPE} from "../../utils/actions";
import API from "../../utils/API";


function Card(props) {
    const [state,dispatch] = useSessionContext();

    const loadCurrent = (id) => {
        API.getSingleRecipe(id)
          .then(res => {
            dispatch({ type: SET_CURRENT_RECIPE, recipe: res.data })
            console.log(res.data)
        }).catch(err => console.log(err));
      };


    let recipe = props.recipe
    return (
        <div className="col-md-4 recipe-div">
            <div className="card">
                <Link to={"/recipes/" + recipe.id} onClick={() => loadCurrent(recipe.id)}>
                    {/* <button class ="like" id={`like-${recipe.id}`}>❤️</button> */}
                    <div className="card-body" style={{ backgroundImage: "url(" + recipe.photo + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                
                </div>
                </Link>
            </div>
            {/* <p className="card-text recipe-desc">{recipe.description}</p> */}
            <h5 className="card-title">{recipe.name}</h5>
        </div>

    )
}

export default Card;