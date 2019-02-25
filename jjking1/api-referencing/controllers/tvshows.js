const Tvshow = require('../models/tvshow')

function indexRoute(req, res){
  Tvshow
    .find()
    .populate({path:'cast', select: 'name'})
    .then(shows => res.json(shows))
}

function showRoute(req, res) {
  Tvshow
    .findById(req.params.id)
    .populate('cast')
    .then(track => res.json(track))
}

function createRoute(req, res){
  Tvshow
    .create(req.body)
    .then(show => res.json(show))
    .catch(err => res.json({ message: err.message }))
}

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  Tvshow
    .findById(req.params.id)
    .then(track => {
      track.comments.push(req.body)
      return track.save()
    })
    .then(track => res.status(201).json(track))
}



module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  commentCreate: commentCreateRoute
}
