const Track = require('../models/track.js')

function indexRoute(req, res) {
  const {fields, ...query } = req.query
  const fieldsArray = fields ? fields.split(',') : []
  Track
    .find(query, fieldsArray)
    .then(track => res.status(200).json(track))
    .catch(err => console.log(err.message))
}

function postRoute(req, res) {
  Track
    .create(req.body)
    .then(track => res.status(201).json(track))
    .catch(err => console.log(err.message))
}

function showRoute(req, res) {
  Track
    .findById(req.params.id)
    .then(track => res.status(200).json(track))
    .catch(err => res.status(404).json(err))
}

function deleteRoute(req, res) {
  Track
    .findById(req.params.id)
    .then(track => track.remove())
    .then(() => res.sendStatus(204))
    .catch(err => console.log(err.message))
}

function updateRoute(req, res) {
  Track
    .findById(req.params.id)
    .then(track => track.set(req.body))
    .then(track => track.save())
    .then(track => res.status(200).json(track))
    .catch(err => res.status(422).json(err.errors))
}

module.exports = {
  index: indexRoute,
  post: postRoute,
  show: showRoute,
  delete: deleteRoute,
  update: updateRoute
}
