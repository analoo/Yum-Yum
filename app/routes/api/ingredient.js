const router = require("express").Router();
const ingredientController = require("../../controllers/ingredientController");

// Matches with "/api/recipe"
router
    .route("/")
    .get(ingredientController.findAll)
    .post(ingredientController.create);

// Matches with "/api/recipe/:id"
router
    .route("/:id")
    .get(ingredientController.findById)
    .put(ingredientController.update)
    .delete(ingredientController.remove);

module.exports = router;