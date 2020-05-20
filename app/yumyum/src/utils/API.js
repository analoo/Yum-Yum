import axios from "axios";

export default {

    // RECIPES
    getAllRecipes: function () {
        console.log("tried to call the api from API")
        return axios.get("/api/recipe");
    },

    getSingleRecipe: function (recipeID) {
        return axios.get(`/api/recipe/${recipeID}`)
    },

    postRecipe: function (recipe) {
        return axios.post("/api/recipe", recipe);
    },

    // USER ROUTES



    // USER RECIPE ROUTES
    getUserRecipes: function (id) {
        // Users Recipes
        return axios.get(`/api/user/${id}/recipe`);
    },

    // USER FAVORITE ROUTES
    getUserRecipeFavorite: function (id) {
        // Users Favorites
        return axios.get(`/api/user/${id}/favorites`)
    },

    // INGREDIENTS
    postIngredient: function (ingredient) {
        return axios.post("/api/ingredient", ingredient);
    },

    // RECIPE INGREDIENTS
    getAllRecipeIngredients: function () {
        return axios.get("/api/recipeIngredient");
    },

    postRecipeIngredient: function (recipeIngredient) {
        return axios.post("/api/recipeIngredient", recipeIngredient);
    },

    // TAG ROUTES




};