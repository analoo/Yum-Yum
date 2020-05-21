const db = require("../models");

// Defining methods for the tagController
module.exports = {
    findAll: function (req, res) {
        db.Tag.findAll({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Tag.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Tag.create(req.body)

            .then(dbModel => { res.json(dbModel.id); console.log(dbModel); })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Tag.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Tag.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};