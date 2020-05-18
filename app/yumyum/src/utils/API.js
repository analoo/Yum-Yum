import axios from "axios";

export default {
    getUserRecipes: function (id) {
        return axios.get(`/api/${id}/recipes`);
    },

    getAllRecipes: function () {
        console.log("tried to call the api from API")
        return axios.get("/api/recipe");
    },

    postRecipe: function (recipe) {
        return axios.post("/api/recipe", recipe);

    }

};