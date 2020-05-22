const db = require("../models");

//Defining methods for Recipes edited or created by the user 
module.exports = {
    findAll: (req, res) => {
        console.log("made a DB User Recipe Request")
        db.User.findAll({
            where: {id: req.params.userId},
            include: {model: Recipe}
        }).then(dbRecipes => {
            res.json(dbRecipes);
        })
    },
     findById: function (req, res) {
        db.User.findAll({
            where: {id: req.params.userId},
            include: {model: db.Recipe,
                where: {id: req.params.recipeId}}
        })
            .then(dbRecipe => res.json(dbRecipe))
            .catch(err => res.status(422).json(err));
    },
    create: function ({body}, res) {
        db.User.create({body,
                include: db.Recipe            
            })
            .then(dbRecipe => { res.json(dbRecipe.id); console.log(dbRecipe); })
            .catch(err => res.status(422).json(err));
    },
    update: function ({body}, res) {
        db.User.update({body, include:db.Recipe})
            .then(dbRecipe => res.json(dbRecipe))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Recipe.delete({where: {id: req.params.recipeId}})
            .then(dbRecipe => dbRecipe.remove())
            .then(dbRecipe => res.json(dbRecipe))
            .catch(err => res.status(422).json(err));
    }
}