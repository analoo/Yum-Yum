const db = require("../models")

module.exports = (app, path) => {
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "../yumyum/public/index.html"));
    });

    // ---------------Recipe Routes -------------
    // get all recipes created by a user
    app.get("/api/:userID/recipes", (req, res) => {
        // db call to pull all recipes for a specific user
    });

    // get all recipes
    app.get("/api/recipes", (req, res) => {
        db.Recipe.findAll({})
            .then(recipes => {
                res.json(recipes)
            })
            .catch(err => {
                res.json(err)
            })
    });

    // creates a new recipe
    app.post("api/recipes/new", (req, res) => {
        // let newRecipe = {
        //     name: "Test Recipe",
        //     description: "This is a description of a new recipe",
        //     photo: "#",
        //     servingSize: 20,
        //     activeTime: 30,
        //     totalTime: 60,
        //     directions: "",
        //     originalRecipeID: 1,
        //     rating: 5
        // }

        db.Recipe.create(req.body, {})
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    });

    //edits an existing recipe
    app.put("api/recipes/:recipeID", (req, res) => {
        db.Recipe.update(req.body, {
            where: {
                id: req.params.recipeID
            }
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            });
    });

    //deletes an existing recipe
    app.delete("api/recipes/:recipeID", (req, res) => {
        db.Recipe.destroy({
            where: {
                id: req.params.recipeID
            }
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            });;
    })

    // --------------Tags CRUD -------------------

    // pulls all tags
    app.get("api/tags", (req, res) => {
        db.Tags.findAll({})
            .then(tags => {
                res.json(tags)
            })
            .catch(err => {
                res.json(err)
            })
    });

    // creates new tags
    app.post("api/tags/new", (req, res) => {
        db.Tags.create(req.body, {})
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    });

    // Deletes Tags
    app.delete("api/tags/:tagID", (req, res) => {
        db.Tags.destroy({
            where: {
                id: req.params.tagID
            }
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            });;;
    });

    //updates tags
    app.put("api/tags/:tagID", (req, res) => {
        db.Tags.update(req.body, {
            where: {
                id: req.params.tagID
            }
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            });
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
        db.User.create(req.body, {})
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
    });

    // see one user
    app.get("api/users/:userID", (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.userID
            }
        })
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })
    });

    // deletes one user
    app.delete("api/users/:userID", (req, res) => {
        db.User.destroy({
            where: {
                id: req.params.userID
            }
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            });
    });

    // updates one user
    app.put("api/users/:userID", (req, res) => {
        db.User.update(req.body, {
            where: {
                id: req.params.userID
            }
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            });
    });

};




import axios from "axios";

export default {
    getUserRecipes: function (id) {
        return axios.get(`/api/${id}/recipes`);
    },

    getAllRecipes: function () {
        return axios.get(`/api/recipes`);
    },

    postRecipe: function (recipe) {
        return axios.post("/api/recipes/new", recipe)

    }

};