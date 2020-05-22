const db = require("../models");

//Defining methods for the userRecipeController 
module.exports = {

    create: function (req, res) {
        console.log(req);
        db.UserRecipe.create(req.body, {})
            .then(userRecipe => {res.json(userRecipe.id)})
            .catch(err => res.status(422).json(err));
    },
    
    findOne: function (req, res) {
        db.UserRecipe.findOne({
            where: { id: req.params.id },
            include: {
                model: db.Recipe}
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: (req,res) => {
        db.UserRecipe.update(req.body,{
            where: {id: req.params.id}
        })
    }
}