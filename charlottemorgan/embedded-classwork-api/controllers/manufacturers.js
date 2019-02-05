const Manufacturer = require('../models/manufacturer')

function indexRoute(req, res) {
  Manufacturer
    .find()
    .then(manufacturers => res.json(manufacturers))
}

function showRoute(req, res) {
  Manufacturer
    .findById(req.params.id)
    .populate('guitars')
    .then(manufacturer => res.json(manufacturer))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
