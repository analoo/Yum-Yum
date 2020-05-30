const { Op } = require("sequelize");
const db = require("../models");

// Defining methods for the RecipeController
module.exports = {

  create: function (req, res) {
    db.Recipe.create(req.body)
      .then(dbResults => { res.json(dbResults.id)})
      .catch(err => res.status(422).json(err));
  },

  findAll: function (req, res) {
    db.Recipe.findAll({limit:25})
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },

  findTop25: function (req, res) {
    db.Recipe.findAll({
      // order: [['"ratingAverage" DESC']]
      // limit:25
    })
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },

  search: function (req, res) {
    db.Recipe.findAll({
      limit:25,
      where: {name:{
      [Op.like]: `%${req.params.search}%`}}
     })
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(422).json(err));
  },

  findOne: function (req, res) {
    db.Recipe.findOne({
      where: {id: req.params.recipeId},
      include: [db.UserRecipe, 
      db.RecipeIngredient,
      db.RecipeTag]
    })
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },


  update: function (req, res) {
    console.log("request was made")
    db.Recipe.update(req.body, 
      {where: { id: req.body.id}})
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },
  
  delete: function (req, res) {
    db.Recipe.findAll({ id: req.params.recipeId })
      .then(dbResults => dbResults.destroy())
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  }
};
