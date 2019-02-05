const Author = require('../models/author')

function indexRoute(req, res) {
  Author
    .find()
    .then(author => res.json(author))
}

function showRoute(req, res) {
  Author
    .findById(req.params.id)
    .populate({ path: 'books', select: 'title image' })
    .then(author => res.json(author))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
