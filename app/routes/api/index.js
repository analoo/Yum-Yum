const router = require("express").Router();
const recipeRoutes = require("./recipe");
const userRoutes = require("./user");
const ingredientRoutes = require("./ingredient");
const recipeIngredientRoutes = require("./recipeIngredient");
const tagRoutes = require("./tag");
const userRecipeRoutes = require("./userRecipe");
const searchRoutes = require("./search")
const recipeTagRoutes = require("./recipeTag")

// Recipe routes
router.use("/recipe", recipeRoutes);

// Search routes
router.use("/search", searchRoutes);

// User routes
router.use("/user", userRoutes);

// Ingredient routes
router.use("/ingredient", ingredientRoutes);

// recipeIngredient routes
router.use("/recipeIngredient", recipeIngredientRoutes);

// User Recipe routes
router.use("/userRecipe", userRecipeRoutes);

// tag routes
router.use("/tag", tagRoutes);

router.use("/recipeTag", recipeTagRoutes);

module.exports = router;
