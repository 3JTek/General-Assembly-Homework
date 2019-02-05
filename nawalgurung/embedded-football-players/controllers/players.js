const Player = require('../models/player')

function indexRoute(req, res) {
  Player
    .find()
    .then(players => res.json(players))
}

function showRoute(req, res) {
  Player
    .findById(req.params.id)
    .then(player => res.json(player))
}

// function commentCreateRoute(req, res) {
//   Player
//     .findById(req.params.id)
//     .then(player => res.status(201).json(player))
// }

module.exports = {
  index: indexRoute,
  show: showRoute
  // commentCreate: commentCreateRoute
}
