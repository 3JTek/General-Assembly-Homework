const Player = require('../models/player')


function indexRoute(req, res){
  Player
    .find()
    .then(player => res.status(200).json(player))
    .catch(err => res.status(404).json(err))
}

function addRoute(req, res){
  Player
    .create(req.body)
    .then(players  => res.status(201).json(players))
    .catch(err => res.status(422).json(err))
}

function showRoute(req, res){
  Player
    .findById(req.params.id)
    .then(player => res.json(player))
    .catch(err => res.status(404).json(err))
}


module.exports = {
  index: indexRoute,
  create: addRoute,
  show: showRoute
}
