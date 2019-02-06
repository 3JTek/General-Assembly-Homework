const Cocktail = require('../models/cocktail')
require('../models/alcohol')
require('../models/ingredient')

function indexRoute(req, res){
  Cocktail
    .find()
    .populate([{
      path: 'alcohols'
    },{
      path: 'ingredients'
    },{
      path: 'comments.user', select: '-email'
    }])
    .then(cocktails => res.json(cocktails))
}

function createRoute(req, res){
  Cocktail
    .create(req.body)
    .then(cocktail => res.status(201).json(cocktail))
}

function commentCreateRoute(req, res){
  req.body.user = req.currentUser
  Cocktail
    .findById(req.params.id)
    .then(cocktail => {
      cocktail.comments.push(req.body)
      cocktail.save()
    })
    .then(cocktail => res.json(cocktail))
    .catch(err => res.json(err.message))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  commentCreate: commentCreateRoute
}
