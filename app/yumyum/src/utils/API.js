import axios from "axios";

export default {

    // USER ROUTES
    postUser: function (user) {
        return axios.post(`/api/user`, user)
    },

    getUserByEmail: function (userEmail) {
        return axios.get(`/api/user/${userEmail}`)
    },

    getAllUsers: function () {
        return axios.get(`/api/user`);
    },

    // RECIPES
    postRecipe: function (recipe) {
        return axios.post("/api/recipe", recipe);
    },

    getAllRecipes: function () {
        console.log("API call for all recipes ")
        return axios.get("/api/recipe");
    },

    searchRecipes: function (search) {
        return axios.get(`/api/search/${search}`)
    },

    getSingleRecipe: function (recipeId) {
        return axios.get(`/api/recipe/${recipeId}`)
    },

    // USER RECIPE ROUTES

    updateUserRecipe: function(userRecipe){
        return axios.put("/api/userRecipe/", userRecipe)
    },

    postUserRecipe: function (userRecipe) {
        return axios.post(`/api/userRecipe/`, userRecipe);
    },

    // USER FAVORITE ROUTES
    getUserRecipes: function (userId) {
        // User Favorites and User Created
        return axios.get(`/api/userRecipe/${userId}`);
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
    getAllTags: function () {
        return axios.get("/api/tag");
    },

    postTag: function (tag) {
        return axios.post("/api/tag", tag)
    },

    postImage: function (image) {
        return axios.post(image)
    },

    // RECIPETAG ROUTES
    getAllRecipeTags: function () {
    return axios.get("/api/recipeTag");
    },

    postRecipeTag: function (recipeTag) {
        return axios.post("/api/recipeTag", recipeTag)
    },
};