const Kitten = require('../models/kitten')

//to display all the kittens
function indexRoute(req, res) {
  Kitten
    .find()
    .then(kittens => res.json(kittens))
}

//display kitpics on the kitten show page
function showRoute(req, res) {
  Kitten
    .findById(req.params.id)
    .populate('kitpics')
    .then(kitten => res.json(kitten))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
