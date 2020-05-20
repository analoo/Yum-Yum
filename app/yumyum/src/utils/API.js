import axios from "axios";

export default {
    getUserRecipes: function (id) {
        // Users Recipes
        return axios.get(`/api/user/${id}/recipe`);
    },

    getAllRecipes: function () {
        console.log("tried to call the api from API")
        return axios.get("/api/recipe");
    },

    postRecipe: function (recipe) {
        return axios.post("/api/recipe", recipe);
    },

    getUserRecipeFavorite: function (id) {
        // Users Favorites
        return axios.get(`/api/user/${id}/favorite`)
    }

};