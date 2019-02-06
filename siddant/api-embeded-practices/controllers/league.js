const League = require('../models/league')

function indexRoute(req, res){
  League
    .find()
    .then(league => res.status(200).json(league))
    .catch(err => res.status(404).json(err))
}

function addRoute(req, res){
  League
    .create(req.body)
    .then(league  => res.status(201).json(league))
    .catch(err => res.status(422).json(err))
}

function showRoute(req, res){
  League
    .findById(req.params.id)
    .populate({path: ' team', select: '_id name image'})
    .then(league => res.json(league))
    .catch(err => res.status(404).json(err))
}


module.exports = {
  index: indexRoute,
  create: addRoute,
  show: showRoute
}
