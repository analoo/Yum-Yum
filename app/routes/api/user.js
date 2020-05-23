const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router
  .route("/")
  .post(userController.create)
  .get(userController.findAll);

// Matches with "/api/user/:userEmail" because we need to get ID from the email
router
  .route("/:userEmail")
  .get(userController.findOne)
  .put(userController.update);
//   .delete(userController.remove);

module.exports = router;
