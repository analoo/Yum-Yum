const router = require("express").Router();
const ingredientController = require("../../controllers/ingredientController");

// Matches with "/api/ingredient"
router
    .route("/")
    .get(ingredientController.findAll)
    .post(ingredientController.create);

// Matches with "/api/ingredient/:id"
router
    .route("/:id")
    .get(ingredientController.findById)
    .put(ingredientController.update)
    .delete(ingredientController.remove);

module.exports = router;