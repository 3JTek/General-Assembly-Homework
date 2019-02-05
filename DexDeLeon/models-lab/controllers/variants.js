const Variant = require('../models/variant')

function indexRoute(req, res){
  Variant
    .find()
    .populate([
      { path: 'manufacturer', select: 'name logo'},
      { path: 'make', select: 'name, created' }
    ])
    .then(variants => res.json(variants))
}

function showRoute(req, res){
  Variant
    .findById(req.params.id)
    .populate([
      { path: 'manufacturer', select: 'name logo'},
      { path: 'make', select: 'name, created' }
    ])
    .then(variant => res.json(variant))
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
  show: showRoute,
  commentCreate: commentCreateRoute
}
