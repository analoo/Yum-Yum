const db = require("../models");

// Defining methods for the ingredientController
module.exports = {
    findAll: function (req, res) {
        db.Ingredient.findAll({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Ingredient.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Ingredient.create(req.body)

            .then(dbModel => { res.json(dbModel.id); console.log(dbModel); })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Ingredient.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
