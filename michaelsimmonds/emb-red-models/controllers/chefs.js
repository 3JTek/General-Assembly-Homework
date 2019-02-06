const Chef = require('../models/chef')

function indexRoute(req, res) {
  Chef
    .find()
    .populate({ path: 'restaraunts', select: '-comments'})
    .then(chefs => res.json(chefs))
}

function showRoute(req, res) {
  Chef
    .findById(req.params.id)
    .then(chef => res.json(chef))
}

function createRoute(req, res) {
  Chef
    .create(req.body)
    .then(chef => res.status(201).json(chef))
    .catch(err => res.status(422).json(err.errors))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute
}
