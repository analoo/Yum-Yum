const router = require("express").Router();
const recipeIngredient = require("../../controllers/recipeIngredientController");

// Matches with "/api/recipeIngredient"
router
    .route("/")
    .get(recipeIngredient.findAll)
    .post(recipeIngredient.create);

// Matches with "/api/recipeIngredient/:recipeId"
router
    .route("/:recipeId")
    // .get(recipeIngredient.findById)
    // .put(recipeIngredient.update)
    .delete(recipeIngredient.remove);

module.exports = router;