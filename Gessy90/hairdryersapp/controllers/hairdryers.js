const Hairdryer = require('../models/hairdryer')

function indexRoute(req,res) {
  Hairdryer
    .find(req.query)
    .then(hairdryers => res.status(200).json(hairdryers))
}

function createRoute(req,res) {
  Hairdryer
    .create(req.body)
    .then(hairdryers => res.status(201).json(hairdryers))
    .catch(err => res.status(422).json(err.errors))
}

function showRoute(req, res) {
  Hairdryer
    .findById(req.params.id)
    .then(hairdryer => res.status(200).json(hairdryer))
}

function updateRoute(req, res){
  Hairdryer
    .findById(req.params.id)
    .then(hairdryer => hairdryer.set(req.body))
    .then(hairdryer => hairdryer.save())
    .then(hairdryer => res.status(200).json(hairdryer))
    .catch(err => res.status(422).json(err.errors))
}

function deleteRoute(req,res){
  Hairdryer
    .findById(req.params.id)
    .then(hairdryer => hairdryer.remove())
    .then(()=> res.sendStatus(204))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
