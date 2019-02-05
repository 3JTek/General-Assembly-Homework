const Team = require('../models/team')

function indexRoute(req, res) {
  Team
    .find()
    .populate('players')
    .then(teams => res.json(teams))
}

function showRoute(req, res) {
  Team
    .findById(req.params.id)
    .populate('players')
    .then(team => res.json(team))
}

function createRoute(req, res){
  Team
    .create(req.body)
    .then(players  => res.status(201).json(players))
    .catch(err => res.status(422).json(err))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute
}
