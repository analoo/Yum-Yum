const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router
  .route("/")
  .post(userController.create)
  .get(userController.findAll);

// Matches with "/api/user/:id"
router
  .route("/:userId")
  .get(userController.findOne)
  .put(userController.update);
//   .delete(userController.remove);

module.exports = router;
