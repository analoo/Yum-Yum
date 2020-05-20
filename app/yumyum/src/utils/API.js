import axios from "axios";

export default {
    getUserRecipes: function (id) {
    // *****Change this in future********
    return axios.get(`/api/${id}/recipe`);
    },

    getAllRecipes: function () {
        console.log("tried to call the api from API")
        return axios.get("/api/recipe");
    },

    postRecipe: function (recipe) {
        return axios.post("/api/recipe", recipe);
    },

    getAllIngredients: function () {
        console.log("getting all ingredients")
        return axios.get("/api/ingredient")
    },

    postIngredient: function (ingredient) {
        return axios.post("/api/ingredient", ingredient);
    },

    getAllRecipeIngredients: function () {
        return axios.get("/api/recipeIngredient");
    },
    
    postRecipeIngredient: function (recipeIngredient) {
        return axios.post("/api/recipeIngredient", recipeIngredient);
    },

    getSingleRecipe: function(recipeID) {
        return axios.get(`/api/recipe/${recipeID}`,)
    }
};