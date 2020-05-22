const router = require("express").Router();
const recipeRoutes = require("./recipe");
const userRoutes = require("./user");
const ingredientRoutes = require("./ingredient");
const recipeIngredientRoutes = require("./recipeIngredient");
const tagRoutes = require("./tag");
const userRecipeRoutes = require("./userRecipe")

// Recipe routes
router.use("/recipe", recipeRoutes);

// User routes
router.use("/user", userRoutes);

// Ingredient routes
router.use("/ingredient", ingredientRoutes);

// recipeIngredient routes
router.use("/recipeIngredient", recipeIngredientRoutes);

// User Recipe routes
router.use("/userRecipe", userRecipeRoutes)

// tag routes
router.use("/tag", tagRoutes)

module.exports = router;
