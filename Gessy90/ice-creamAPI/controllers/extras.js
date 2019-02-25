const Extra = require('../models/extra')

function indexRoute(req, res) {
  Extra
    .find()
    .then(extras => res.json(extras))
}

function showRoute(req,res) {
  Extra
    .findById(req.params.id)
    .then(extra => res.json(extra))
}

function commentCreateRoute(req,res){
  req.body.user = req.currentUser
  Extra
    .findById(req.params.id)
    .then(extra => {
      extra.comments.push(req.body)
      return extra.save()
    })
    .then(extra => res.status(201).json(extra))
}
module.exports = {
  index: indexRoute,
  show: showRoute,
  commentCreate: commentCreateRoute
}
