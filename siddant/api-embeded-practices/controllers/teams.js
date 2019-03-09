const Team = require('../models/team')


function indexRoute(req, res){
  Team
    .find()
    .then(player => res.status(200).json(player))
    .catch(err => res.status(404).json(err))
}

function addRoute(req, res){
  Team
    .create(req.body)
    .then(players  => res.status(201).json(players))
    .catch(err => res.status(422).json(err))
}

function showRoute(req, res){
  Team
    .findById(req.params.id)
    //.populate(' league players' )
    .populate([{path: 'players', select: '-comments'}, {path: ' league', select: 'leaguename '}])
    .then(player => res.json(player))
    .catch(err => res.status(404).json(err))
}


module.exports = {
  index: indexRoute,
  create: addRoute,
  show: showRoute
}