const Variant = require('../models/variant')

function indexRoute(req, res){
  Variant
    .find()
    .then(variants => res.json(variants))
}

function commentCreateRoute(req, res){
  req.body.user = req.currentUser
  Variant
    .findById(req.params.id)
    .then(variant => {
      variant.comments.push(req.body)
      return variant.save()
    })
    .then(variant => res.status(201).json(variant))
}

module.exports = {
  index: indexRoute,
  commentCreate: commentCreateRoute
}
