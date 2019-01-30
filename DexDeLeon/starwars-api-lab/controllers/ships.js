const Ship = require('../models/ship')

function indexRoute(req, res) {

  //console.log(req.get('Content-Type'))
  //console.log(req.param(name))
  const { fields, ...query } = req.query
  const select = fields ? fields.split(',') : []
  // console.log(fields)
  Ship
    .find(query)
    .select(select)
    .then(ships => res.status(200).json(ships))
}

function createRoute(req, res){
  Ship
    .create(req.body)
    .then(ship => res.status(201).json(ship))
    .catch(err => res.status(422).json(err.message))
}

function showRoute(req, res){
  Ship
    .findById(req.params.id)
    .then(ship => res.status(200).json(ship))
}

function updateRoute(req, res){
  Ship
    .findById(req.params.id)
    .then(ship => ship.set(req.body))
    .then(ship => ship.save())
    .then(ship => res.status(200).json(ship))
    .catch(err => res.status(422).json(err.message))
}

function deleteRoute(req, res){
  Ship
    .findById(req.params.id)
    .then(ship => ship.remove())
    .then(() => res.sendStatus(204))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
