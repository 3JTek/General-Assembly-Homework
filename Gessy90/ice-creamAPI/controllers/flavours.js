const Flavour = require('../models/flavour')

function indexRoute(req, res) {
  Flavour
    .find()
    .then(flavours => res.json(flavours))
}

function showRoute(req,res) {
  Flavour
    .findById(req.params.id)
    .then(flavour => res.json(flavour))
}


module.exports = {
  index: indexRoute,
  show: showRoute
}
