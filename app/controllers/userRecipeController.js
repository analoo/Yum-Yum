const db = require("../models");

//Defining methods for the userRecipeController 
module.exports = {

    create: function (req, res) {
        console.log(req);
        db.UserRecipe.create(req.body, {})
            .then(userRecipe => { res.json(userRecipe.id) })
            .catch(err => res.status(422).json(err));
    },

    findUserRecipes: (req, res) => {
        db.UserRecipe.findAll({
            where: { UserId: req.params.userId },
            include: db.Recipe
        })
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    },

    findOne: function (req, res) {
        db.UserRecipe.findOne({
            where: { userRecipeKey: `${req.params.userId}-${req.params.recipeId}` },
            include: {
                model: db.Recipe
            }
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: (req,res) => {
        db.UserRecipe.update(req.body,{
            where: {userRecipeKey: `${req.params.userId}-${req.params.recipeId}`}
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    }
}