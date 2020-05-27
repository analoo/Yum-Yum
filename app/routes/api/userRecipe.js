const router = require("express").Router();
const userRecipeController = require("../../controllers/userRecipeController");

//Matches with "/api/userRecipe"
router
    .route("/")
    .post(userRecipeController.create)

//Matches with "/api/userRecipe/:userId"
router
    .route("/:userId")
    .get(userRecipeController.findUserRecipes)

//Matches with "/api/userRecipe/:userId-:recipeId"
router
    .route("/:userId/:recipeId") // matches recipekey
    .get(userRecipeController.findOne)
    .put(userRecipeController.update);
    // .delete(userRecipeController.delete)

module.exports = router;
