const Restaraunt = require('../models/restaraunt')

function indexRoute(req, res) {
  Restaraunt
    .find()
    .populate({ path: 'chef', select: 'name' })
    .then(restaraunts => res.json(restaraunts))
}

// function showRoute(req, res) {
//   Restaraunt
//     .findById(req.params.id)
//     .populate({ path: 'chef', select: 'name age from'})
//     .then(restaraunt => res.json(restaraunt))
// }

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser //this is created in the secure route. This is the user object minus the password
  Restaraunt
    .findById(req.params.id)
    .then(restaraunt => {
      restaraunt.comments.push(req.body)
      return restaraunt.save()
    })
    .then(restaraunt => res.status(201).json(restaraunt))
}

function createRoute(req, res) {
  Restaraunt
    .create(req.body)
    .then(chef => res.status(201).json(chef))
    .catch(err => res.status(422).json(err.errors))
}

module.exports = {
  index: indexRoute,
  // show: showRoute,
  create: createRoute,
  createComment: commentCreateRoute
}
