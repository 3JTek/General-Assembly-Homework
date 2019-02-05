const Movie = require('../models/movie')

function indexRoute(req, res) {
  Movie
    .find()
    .populate('cast')
    .then(movies => res.json(movies))
}

function createRoute(req, res) {
  Movie
    .create(req.body)
    .then(movie => res.json(movie))
}

function showRoute(req, res) {
  Movie
    .findById(req.params.id)
    .populate({path: 'comments.user', select: '-email'})
    .then(movies => res.json(movies))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute
}
