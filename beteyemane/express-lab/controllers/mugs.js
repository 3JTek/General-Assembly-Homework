const Mug = require('../models/mug')

function indexRoute (req, res) {
  console.log(req.query)
  const { fields, ...rest } = req.query
  Mug
    .find(rest, fields.split(',').join(' '))
    .then(mugs => res.json(mugs))
    .catch(err => res.status(422).json(err.errors))
}

function createRoute (req, res) {
  Mug
    .create(req.body)
    .then(mug => res.json(mug))
    .catch(err => res.status(422).json(err.errors))
}

function showRoute (req, res) {
  Mug
    .findById(req.params.id)
    .then(mug => res.json(mug))
    .catch(err => res.status(404).json(err.errors))
}

function updateRoute(req, res) {
  Mug
    .findById(req.params.id)
    .then(mug => mug.set(req.body))
    .then(mug => mug.save())
    .then(mug => res.json(mug))
    .catch(err => res.status(404).json(err.errors))
}

function deleteRoute (req, res) {
  Mug
    .findById(req.params.id)
    .then(mug => mug.delete())
    .then(() => res.sendStatus(204))
    .catch(err => res.status(404).json(err.errors))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
