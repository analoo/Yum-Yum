//FAVORITES index.js

import React, { useEffect, useState } from "react";
import API from "../../utils/API.js"
import Card from "../Card";
import { useSessionContext } from "../../utils/GlobalState";
import {UPDATE_FAVORITE, REMOVE_FAVORITE, LOADING} from "../../utils/actions"

const Favorites = () => {
    const [state, dispatch] = useSessionContext();
    const [favorite, setFavorite] = useState([]);
    const [recipes, setRecipes] = useState([]);


    const getFavorites = () => {
        API.getUserRecipes(state.user.id).then(userFavorites => {
            console.log(userFavorites);
            setFavorite(userFavorites.data);
            console.log(favorite);
        }) 
        dispatch({LOADING});
        dispatch({UPDATE_FAVORITE})
    }

    // Removes from the Favorite list, not the recipe
    const removeFavorite = id => {
        let userRecipeKey = `${state.user.id}-${id}`;
        dispatch({
            type: REMOVE_FAVORITE,
            userRecipeKey: userRecipeKey
        });
        console.log(`Removed :${userRecipeKey} from FavoriteList`)
    };

    useEffect(() => {
        getFavorites();
    }, []);

    return(
        <div>
            {recipes.map(recipe => (
                <Card recipe={recipe} key={recipe.id} onClick={()=> removeFavorite(recipe.id)} />
            ))}
        </div>
    )

}

export default Favorites;