const db = require("../models");

// Defining methods for the RecipeController
module.exports = {
  findAll: function (req, res) {
    console.log("made a DB recipe request!")
    db.Recipe.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findOne: function (req, res) {
    db.Recipe.findOne({where: {id: req.params.recipeId}
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Recipe.create(req.body)
      .then(dbModel => {res.json(dbModel.id); console.log(dbModel);})
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Recipe.update({ id: req.params.recipeId }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  delete: function (req, res) {
    db.Recipe.findAll({ id: req.params.recipeId })
      .then(dbModel => dbModel.destroy())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
