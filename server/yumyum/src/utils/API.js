import axios from "axios";

export default {
    getUserRecipes: function (id) {
        return axios.get(`/api/${id}/recipes`);
    },

    getAllRecipes: function () {
        return axios.get(`/api/recipes`);
    },

    postRecipe: function(recipe) {
        return axios.post("/api/recipes/new", recipe)

    }

};