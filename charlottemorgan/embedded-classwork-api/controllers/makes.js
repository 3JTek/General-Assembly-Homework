const Make = require('../models/make')

function indexRoute(req, res) {
  Make
    .find()
    .then(makes => res.json(makes))
}

function showRoute(req, res) {
  Make
    .findById(req.params.id)
    .populate('singles')
    .then(make => res.json(make))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
