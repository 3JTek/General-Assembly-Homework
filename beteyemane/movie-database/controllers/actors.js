const Actor = require('../models/actor')

function indexRoute(req, res) {
  Actor
    .find()
    .populate({ path: 'movie', select: 'title' })
    .then(actors => res.json(actors))
}

function showRoute(req, res) {
  Actor
    .findById(req.params.id)
    .then(actor => res.json(actor))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
