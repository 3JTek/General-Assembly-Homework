//const Kitpic = require('../models/kitpic')

function indexRoute(req, res) {
  Kitpic
    .find()
    .populate({ path: 'kitten', select: 'name' })
    .then(kitpics => res.json(kitpics))
}

function showRoute(req, res) {
  Kitpic
    .findById(req.params.id)
    .populate([{
      path: 'kitten', select: 'name'
    }, {
      path: 'comments.user', select: '-email'
    }])
    .then(kitpic => res.json(kitpic))
}


function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  Picture
    .findById(req.params.id)
    .then(picture => {
      picture.comments.push(req.body)
      return picture.save()
    })
    .then(picture => res.status(201).json(kitpic))
}


module.exports = {
  index: indexRoute,
  show: showRoute,
  commentCreate: commentCreateRoute
}
