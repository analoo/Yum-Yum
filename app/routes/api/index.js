const router = require("express").Router();
const recipeRoutes = require("./recipe");
const userRoutes = requre("./user");

// Recipe routes
router.use("/recipe", recipeRoutes);

// User routes
router.use("/user", userRoutes);

module.exports = router;
