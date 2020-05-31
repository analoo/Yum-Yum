const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

// Matches with "/api/recipe"
router
  .route("/")
  .get(recipeController.findAll)
  .post(recipeController.create)
  .put(recipeController.update)

//matches with "/api/recipe/all/top"

router
  .route("/all/top")
  .get(recipeController.findTop25)

// Matches with "/api/recipe/one/:recipeId"
router
  .route("/one/:recipeId")
  .get(recipeController.findOne)
  .delete(recipeController.delete);



module.exports = router;
