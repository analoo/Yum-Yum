const router = require("express").Router();
const recipeIngredient = require("../../controllers/recipeIngredient");

// Matches with "/api/recipe"
router
    .route("/")
    .get(recipeIngredient.findAll)
    .post(recipeIngredient.create);

// Matches with "/api/recipe/:id"
router
    .route("/:id")
    .get(recipeIngredient.findById)
    .put(recipeIngredient.update)
    .delete(recipeIngredient.remove);

module.exports = router;