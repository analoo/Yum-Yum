const router = require("express").Router();
const recipeRoutes = require("./recipe");
const userRoutes = require("./user.js");

// Recipe routes
router.use("/recipe", recipeRoutes);

// User routes
router.use("/user", userRoutes);

module.exports = router;
