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


function newPlayer(req, res) {
  Player
    .create(req.body)
    .then(players  => res.status(201).json(players))
    .catch(err => res.status(422).json(err))
}

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  Player
    .findById(req.params.id)
    .then(player => {
      player.comments.push(req.body)
      return player.save()
    })
    .then(track => res.status(201).json(track))
}



module.exports = {
  index: indexRoute,
  show: showRoute,
  newPlayer: newPlayer,
  commentCreate: commentCreateRoute
}
