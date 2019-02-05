const Team = require('../models/team')

function indexRoute(req, res){
  Team
    .find()
    .populate('skaters')
    .then(teams => res.json(teams))
}

function showRoute(req, res) {
  Team
    .findById(req.params.id)
    .populate('skaters')
    .then(team => res.json(team))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
