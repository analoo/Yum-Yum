import axios from "axios";

export default {

    // RECIPES
    getAllRecipes: function () {
        console.log("tried to call the api from API")
        return axios.get("/api/recipe");
    },

    getSingleRecipe: function (recipeId) {
        return axios.get(`/api/recipe/${recipeId}`)
    },

    postRecipe: function (recipe) {
        return axios.post("/api/recipe", recipe);
    },

    // USER ROUTES



    // USER RECIPE ROUTES
    getUserRecipes: function (userId) {
        // Users Recipes
        return axios.get(`/api/user/${userId}/recipe`);
    },

    // USER FAVORITE ROUTES
    getUserRecipeFavorite: function (userId) {
        // Users Favorites
        return axios.get(`/api/user/${userId}/favorites`)
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