const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router
    .route("/:search")
    .get(recipeController.search);

module.exports = router;
