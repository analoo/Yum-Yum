const router = require("express").Router();
const userController = require("../../controllers/userController");
const userRecipeController = require("../../controllers/userRecipeController");
const favoritesController = require("../../controllers/favoritesController");

// Matches with "/api/user"
router
  .route("/")
  // .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:userId")
  .get(userController.findById)
  .put(userController.update);
//   .delete(userController.remove);

// Matches with "/api/user/:id/recipe"
router
  .route("/:userId/recipe")
// Get User Recipes USER Route to User Recipe Controller
  .get(userRecipeController.findAll)
  .post(userRecipeController.create)
  .put(userRecipeController.update)
  .delete(userRecipeController.delete);

router
  .route("/:userId/recipe/:recipeId")
  .get(favoritesController.findAll)
  .post(favoritesController.create);

router
  .route("/:userId/favorite")
// get User Favorites & route to Favorites Controller
  .get(favoritesController.findAll)
  .post(favoritesController.create);

  router
    .route("/:userId/favorite/:recipeId")
// Get User Favorites & route to Favorites Controller
  .get(favoritesController.findById)
  .post(favoritesController.create)
  .put(favoritesController.update)
  .delete(favoritesController.delete);

module.exports = router;
