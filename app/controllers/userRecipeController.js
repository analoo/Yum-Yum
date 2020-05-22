const db = require("../models");

//Defining methods for the userRecipeController 
module.exports = {

    create: function (req, res) {
        console.log(req);
        db.UserRecipe.create(req.body, {})
            .then(dbUserRecipe => {res.json(dbModel.id)})
            .catch(err => res.status(422).json(err));
    },
    

    findOne: function (req, res) {
        db.UserRecipe.findOne({
            where: { userRecipeKey: req.params.urk },
            include: {
                model: db.Recipe}
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: (req,res) => {
        db.UserRecipe.update(req.body,{
            where: {userRecipeKey: req.params.urk}
        })
    }
}