const db = require("../models");

//Defining methods for the RecipeController
module.exports = {
    findAll: (req, res) => {
        console.log("made a DB User Recipe Request")
        db.User.findAll({
            where: {id: req.params.id}
        }).then(dbRecipes => {
            res.json(dbRecipes);
        })
    },
     findById: function (req, res) {
        db.User.findById({recipeId,
            where: {id: req.params.userId}
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User.create(req.body)

            .then(dbModel => { res.json(dbModel.id); console.log(dbModel); })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.User.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}