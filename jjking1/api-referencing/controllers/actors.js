const Actor = require('../models/actor')

function indexRoute(req, res) {
  Actor
    .find()
    .populate({ path: 'appearedIn', select: 'title' })
    .then(actors => res.json(actors))
}

function showRoute(req, res) {
  Actor
    .findById(req.params.id)
    .populate('appearedIn')
    .then(actor => res.json(actor))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
