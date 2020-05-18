const db = require("../models");

// Defining methods for the RecipeController
module.exports = {
  findAll: function (req, res) {
    db.Recipe.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Recipe.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("Yo");
    db.Recipe.create(req.body)
      // include: [{
        // model: db.Ingredient,
        // as: "ingredients",
        // required: false,
        // attributes: ["ingredient"],
        // through: { attributes: [] },
        // }
      // ]
      .then(dbModel => {res.json(dbModel.id); console.log(dbModel);})
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Recipe.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Recipe.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
