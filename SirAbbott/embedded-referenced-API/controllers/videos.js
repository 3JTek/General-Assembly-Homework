const Video = require('../models/video')

function indexRoute(req, res) {
  Video
    .find()
    .populate({ path: 'team', select: 'name'})
    .then(videos => res.json(videos))
}

function showRoute(req, res) {
  Video
    .findById(req.params.id)
    .populate({ path: 'team', select: 'name'})
    .then(video => res.json(video))
}

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  Video
    .findById(req.params.id)
    .then(video => {
      video.comments.push(req.body)
      return video.save()
    })
    .then(video => res.status(201).json(video))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  comments: commentCreateRoute
}
