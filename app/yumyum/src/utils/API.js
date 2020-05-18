import axios from "axios";

export default {
    getUserRecipes: function (id) {
        // *****Change this in future********
        return axios.get(`/api/${id}/recipe`);
    },

    getAllRecipes: function () {
        return axios.get(`/api/recipe`);
    },

    postRecipe: function (recipe) {
        return axios.post("/api/recipe", recipe);

    }

};