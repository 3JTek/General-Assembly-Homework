const Restaurant = require('../models/restaurant')

function indexRoute(req,res){
  Restaurant
    .find()
    .populate({path: 'chef', select: 'name'})
    // .then(restaurant => {
    //   const smallComments = restaurant.comments[0]
    //   restaurant.comments = smallComments
    //   return restaurant
    // } )
    .then(restaurant => res.json(restaurant))
}

function createRoute(req, res) {
  Restaurant
    .create(req.body)
    .then(restaurant => res.status(201).json(restaurant))
    .catch(err => res.status(422).json(err.errors))
}

function showRoute(res,req){
  Restaurant
    .findById(req.params.id)
    .populate({
      path: 'chef', select: 'name age from'
    })
    .then(restaurant => res.json(restaurant))
}

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  Restaurant
    .findById(req.params.id)
    .then(restaurant => {
      restaurant.comments.push(req.body)
      return restaurant.save()
    })
    .then(restaurant => res.status(201).json(restaurant))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  commentCreate: commentCreateRoute,
  show: showRoute
}
