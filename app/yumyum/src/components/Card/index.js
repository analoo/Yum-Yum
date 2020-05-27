//CARD index.js
import React, {useState} from "react";
import "./card.css"
import API from "../../utils/API.js"
import { Link } from "react-router-dom";
import { useSessionContext } from "../../utils/GlobalState";
import {ADD_FAVORITE} from "../../utils/actions"

const Card = (props) => {

    const [state, dispatch] = useSessionContext();
    const [favorite, setFavorite] = useState();
    console.log(state.user.id);

    const addFavorite = (id) => {
        const addFavorite = {
            RecipeId: id,
            UserId: state.user.id,
            userRecipeKey: `${state.user.id}-${id}`,
            favorite: 1
        };
        console.log(addFavorite);

        API.postUserRecipe(addFavorite).then(favAdded => {
            console.log(favAdded);
            let favRecipe = favAdded.data;
            setFavorite(favRecipe);
        }).then(
            dispatch({
                type: ADD_FAVORITE,
                recipeId: addFavorite
            }));
    }

    let recipe = props.recipe.Recipe ? props.recipe.Recipe : props.recipe;
    let fav = props.recipe.favorite;
    console.log(recipe);
    return (
        <div className="col-md-4 col-sm-12 recipe-div">

            <div className="card">
                <Link to={"/recipes/" + recipe.id}>
                    {/* <button class ="like" id={`like-${recipe.id}`}>❤️</button> */}
                    <div className="card-body" style={{ backgroundImage: "url(" + recipe.photo + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "200px", backgroundSize: "cover" }}>
                        {/* <img id={`like-${recipe.id}`} src="favoriteNOT.svg" height="30px" style={{opacity: ".75", position: "absolute", right: "10px", top: "10px" }} /> */}
                    </div>
                    <div className="card-title"><h5 className="card-title" >{recipe.name}</h5></div>
                </Link>
                <img id={`like-${recipe.id}`} src={fav ? "favorite.svg":"favoriteNOT.svg"} height="30px" style={{ opacity: ".75", position: "absolute", right: "10px", top: "10px" }} onClick={()=>{addFavorite(recipe.id)}} />

            </div>
            {/* <p className="card-text recipe-desc">{recipe.description}</p> */}

        </div>
    )
}

export default Card;