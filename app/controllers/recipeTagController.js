const db = require("../models");

//Defining methods for the recipeTag Controller 
module.exports = {

    create: function (req, res) {
        db.RecipeTag.create(req.body, {})
            .then(recipeTag => { res.json(recipeTag.id) })
            .catch(err => res.status(422).json(err));
    },

    findAll: (req, res) => {
        db.RecipeTag.findAll({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // findOne: function (req, res) {
    //     db.RecipeTag.findOne({
    //         where: { category: req.params.recipeTag },
    //     })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },

    // update: (req, res) => {
    //     db.RecipeTag.update(req.body, {
    //         where: { category: req.params.recipeTag },
    //     })
    // }

    remove: function (req, res) {
        db.RecipeTag.destroy({where: {RecipeId: req.params.recipeId}})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}