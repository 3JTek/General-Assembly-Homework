const Country = require('../models/country')

// function indexQueryRoute( req, res ){
//
//   const { fields, ...rest } = req.query
//   const select = fields ? fields.split(',') : []
//   Country
//     .find(rest)
//     .select(select)
//     .then(countries => res.status(200).json(countries))
// }

function indexRoute( req, res ){
  const { fields, ...rest } = req.query
  const select = fields ? fields.split(',') : []
  Country
    .find(rest)
    .select(select)
    .then(countries => res.status(200).json(countries))
}

function createRoute( req, res ){
  Country
    .create(req.body)
    .then(countries => res.status(201).json(countries))
    .catch(err => res.status(422).json(err.errors))
}

function showRoute(req, res) {
  Country
    .findById(req.params.id)
    .then(country => res.status(200).json(country))
}

function updateRoute(req, res) {
  Country
    .findById(req.params.id)
    .then(country => country.set(req.body))
    .then(country => country.save())
    .then(country => res.status(200).json(country))
    .catch(err => res.status(422).json(err.errors))
}

function deleteRoute(req, res) {
  Country
    .findById(req.params.id)
    .then(country => country.remove())
    .then(() => res.sendStatus(204))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
