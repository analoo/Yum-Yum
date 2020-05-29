//CARD index.js
import React, {useState} from "react";
import "./card.css"
import API from "../../utils/API.js"
import { Link } from "react-router-dom";
import { useSessionContext } from "../../utils/GlobalState";
import {ADD_FAVORITE, UPDATE_FAVORITE} from "../../utils/actions"

const Card = (props) => {

    const [state, dispatch] = useSessionContext();
    const [favorite, setFavorite] = useState();
    let recipe = props.recipe.Recipe ? props.recipe.Recipe : props.recipe;
    let fav = props.recipe.favorite;
    console.log(`Favorite: ${fav}`);
    console.log(`Recipe: ${recipe}`);
    console.log(`UserId: ${state.user.id}`);


    const addFavorite = (id) => {

        console.log(`addFavorite(${id})`);
        const addFavorite = {
            RecipeId: id,
            UserId: state.user.id,
            userRecipeKey: `${state.user.id}-${id}`,
            favorite: 1
        };
        console.log(addFavorite);

        API.postUserRecipe(addFavorite)
        .then(favAdded => {
            // console.log(favAdded);
            let fav = true;
            setFavorite(true);
        })
        .then(
            dispatch({
                type: ADD_FAVORITE,
                favorite: favorite
            })
        );

        window.location.reload();
    }

    const updateFavorite = (id) => {

        console.log(`changeFavorite(${id})`);
        let chgFav = 0;
        console.log(chgFav);
        console.log(fav);
        console.log(state.favorite);
        fav ? chgFav = 0 : chgFav = 1;
        console.log(chgFav); 
        const chgUserRecipeFav = {
            RecipeId: id,
            UserId: state.user.id,
            userRecipeKey: `${state.user.id}-${id}`,
            favorite: chgFav
        };

        API.updateUserRecipe(chgUserRecipeFav)
        .then(favUpdated =>{
            console.log(`UserFavoriteRecipeUpdated`);
            setFavorite(!fav);
            console.log(favorite);
        })
        .then(dispatch({
            type: UPDATE_FAVORITE,
            favorite: favorite
        }));

        window.location.reload();
    };

    const changeFavorite = (id) => {
        console.log(`Get User Recipe to change Favorite: ${state.user.id}-${id}`)
        API.getUserRecipe(state.user.id, id)
            .then(res => {
                console.log(res);
                res.data.id ? updateFavorite(id) : addFavorite(id);
            })
    };

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
                <img id={`like-${recipe.id}`} src={fav ? "favorite.svg" : "favoriteNot.svg"} height="30px" style={{ opacity: ".75", position: "absolute", right: "10px", top: "10px" }} onClick={() => { changeFavorite(recipe.id)}} />

            </div>
            {/* <p className="card-text recipe-desc">{recipe.description}</p> */}

        </div>
    )
}

export default Card;