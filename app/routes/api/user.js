const router = require("express").Router();
const userController = require("../../controllers/userController");
const userRecipeController = require("../../controllers/userRecipeController")

// Matches with "/api/user"
router
  .route("/")
  // .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update);
//   .delete(userController.remove);

// Matches with "/api/user/:id/recipe"
router
  .route("/:id/recipe")
// Get User Recipes USER Route to User Recipe Controller
  .get(userRecipeController.findAll)
  .post(userRecipeController.create)
  .put(userRecipeController.update)
  .delete(userRecipeController.delete);

module.exports = router;
