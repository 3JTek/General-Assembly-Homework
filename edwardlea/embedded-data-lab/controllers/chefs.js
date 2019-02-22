const Chef = require('../models/chef')

function indexRoute(req,res){
  Chef
    .find()
    .populate({path: 'restaurant', select: 'name address cuisine'})
    .then(chefs => res.json(chefs))
}

function createRoute(req, res) {
  Chef
    .create(req.body)
    .then(chef => res.status(201).json(chef))
    .catch(err => res.status(422).json(err.errors))
}

function showRoute(res,req){
  Chef
    .findById(req.params.id)
    .then(chef => res.json(chef))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute
}
