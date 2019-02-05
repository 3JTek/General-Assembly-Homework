const Author = require('../models/author')

function indexRoute(req, res) {
  Author
    .find()
    .populate('novels')
    .then(authors => res.status(200).json(authors))
    .catch(err => console.log(err.message))
}

function showRoute(req, res) {
  Author
    .findById(req.params.id)
    .populate({ path: 'novels', select: '-comments' })
    .then(author => res.json(author))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
