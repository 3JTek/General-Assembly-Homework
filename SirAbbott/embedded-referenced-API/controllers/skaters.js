const Skater = require('../models/skater')

function indexRoute(req, res){
  Skater
    .find()
    .populate({path: 'team', select: 'name' })
    .then(skaters => res.json(skaters))
}

function showRoute(req, res) {
  Skater
    .findById(req.params.id)
    .populate({ path: 'team', select: 'name' })
    .then(skater => res.json(skater))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
