const router = require("express").Router();
const recipeTagController = require("../../controllers/recipeTagController");

//Matches with "/api/recipeTag"
router
    .route("/")
    .post(recipeTagController.create)
    .get(recipeTagController.findAll)


//Matches with "/api/recipeTag/:recipeTag"
router
    .route("/:recipeTag")
    .get(recipeTagController.findOne)
    .put(recipeTagController.update);
    // .delete(recipeTagController.delete)

module.exports = router;
