const router = require("express").Router();
const userRecipeController = require("../../controllers/userRecipeController");

//Matches with "/api/userRecipe"
router
    .route("/")
    .post(userRecipeController.create)
    .put(userRecipeController.update);
<<<<<<< HEAD

=======
>>>>>>> 419352e062bb2bde7e427568b771d10af42bac24

//Matches with "/api/userRecipe/:userId"
router
    .route("/:userId")
    .get(userRecipeController.findUserRecipes)

// Matches with "/api/userRecipe/:userId/:recipeId"
router
<<<<<<< HEAD
    .route("/:userId-:recipeId") // matches recipekey
    .get(userRecipeController.findOne);
=======
    .route("/:userId/:recipeId") // matches recipekey
    .get(userRecipeController.findOne)
>>>>>>> 419352e062bb2bde7e427568b771d10af42bac24
    // .delete(userRecipeController.delete)

module.exports = router;
