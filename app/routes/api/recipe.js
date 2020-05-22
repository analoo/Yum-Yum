const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

// Matches with "/api/recipe"
router
  .route("/")
  .get(recipeController.findAll)
  .post(recipeController.create);

// Matches with "/api/recipe/:recipeId"
router
  .route("/:recipeId")
  .get(recipeController.findOne)
  .put(recipeController.update)
  .delete(recipeController.delete);

module.exports = router;
