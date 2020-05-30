const router = require("express").Router();
const recipeTagController = require("../../controllers/recipeTagController");

//Matches with "/api/recipeTag"
router
    .route("/")
    .post(recipeTagController.create)
    .get(recipeTagController.findAll)


//Matches with "/api/recipeTag/:recipeId"
router
    .route("/:recipeId")
    // .get(recipeTagController.findOne)
    // .put(recipeTagController.update)
    .delete(recipeTagController.remove)

module.exports = router;
