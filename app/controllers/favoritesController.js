const db = require("../models");

//Defining methods for the FavoritesController by 
module.exports = {
    findAll: (req, res) => {
        console.log("made a DB User Recipe Request")
        db.User.findAll({
            where: {id: req.params.userId},
            include: {model: db.Recipe},
        }).then(dbRecipes => {
            res.json(dbRecipes);
        })
    },

    findById: function (req, res) {
        db.User.findAll({
            where: {id: req.params.userId},
            include: {model: Recipe,
                where:{id:req.params.recipeId}}
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function ({body}, res) {
        db.User.create({body,
            include:{model: db.Recipe}
        })
        .then(dbModel => { res.json(dbModel.id); console.log(dbModel); })
        .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        console.log(`userId: ${userId}`);
        console.log(`recipeId: ${recipeId}`);
        console.log(`body: ${body}`);
        db.favoriteRecipe.update({ 
            body
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    delete: function (req, res) {
        db.User.delete({include: { model: db.RecipeId, id: req.params.id }})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}