const db = require("./models")

modules.export = function (app) {

    // ---------------Recipe Routes -------------
    // get all recipes created by a user
    app.get("/api/:userID/recipes", (req, res) => {
        // db call to pull all recipes for a specific user
    });

    // get all recipes
    app.get("/api/recipes", (req, res) => {

    });

    // creates a new recipe
    app.post("api/recipes/new", (req, res) => {

    });

    //edits an existing recipe
    app.put("api/recipes/:recipeID", (req, res) => {

    });

    //deletes an existing recipe
    app.delete("api/recipes/:recipeID", (req, res) => {

    })

    // --------------Tags CRUD -------------------

    // pulls all tags
    app.get("api/tags", (req, res) => {

    });

    // creates new tags
    app.post("api/tags/new", (req, res) => {

    });

    // Deletes Tags
    app.delete("api/tags/:tagID", (req, res) => {

    });

    //updates tags
    app.put("api/tags/:tagID", (req, res) => {

    });

    // --------------Ingredients CRUD-------------------
    
    // pulls all ingredients
    app.get("api/ingredients", (req, res) => {

    });

    // creates new ingredients
    app.post("api/ingredients/new", (req, res) => {

    });

    // deletes ingredients
    app.delete("api/ingredients/:ingredientsID", (req, res) => {

    });

    // updates ingredients
    app.put("api/ingredients/:ingredientsID", (req, res) => {

    });

    // --------------Admin USER CRUD -------------------

    // creates new users
    app.post("api/users/new", (req, res) => {

    });

    // see one user
    app.get("api/users/:userID", (req, res) => {

    });

     // deletes one user
    app.delete("api/users/:userID", (req, res) => {

    });

     // updates one user
    app.put("api/users/:userID", (req, res) => {

    });



}