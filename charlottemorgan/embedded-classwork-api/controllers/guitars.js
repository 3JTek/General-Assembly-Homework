const Guitar = require('../models/guitar')

function indexRoute(req, res) {
  Guitar
    .find()
    .populate({ path: 'make', select: 'name' })
    .then(tracks => res.json(tracks))
}

function showRoute(req, res) {
  Guitar
    .findById(req.params.id)
    .populate([{
      path: 'make', select: 'name image'
    }, {
      path: 'manufacturer', select: 'name location'
    }, {
      path: 'comments.user', select: '-email'
    }])
    .then(guitar => res.json(guitar))
}

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  Guitar
    .findById(req.params.id)
    .then(guitar => {
      guitar.comments.push(req.body)
      return guitar.save()
    })
    .then(guitar => res.status(201).json(guitar))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  commentCreate: commentCreateRoute
}
