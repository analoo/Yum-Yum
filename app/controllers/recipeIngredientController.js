const db = require("../models");

// Defining methods for the recipeIngredientController
module.exports = {
    findAll: function (req, res) {
        db.RecipeIngredient.findAll({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // findById: function (req, res) {
    //     db.RecipeIngredient.findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    create: function (req, res) {
        db.RecipeIngredient.create(req.body)
            .then(dbModel => { res.json(dbModel.id); console.log(dbModel); })
            .catch(err => res.status(422).json(err));
    },
    // update: function (req, res) {
    //     db.RecipeIngredient.update({ id: req.params.id }, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    remove: function (req, res) {
        db.RecipeIngredient.destroy({where: {RecipeId: req.params.recipeId}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
