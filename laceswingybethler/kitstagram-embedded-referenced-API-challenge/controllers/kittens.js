const Kitten = require('../models/kitten')

//to display all the kittens
function indexRoute(req, res) {
  Kitten
    .find()
    .then(kittens => res.json(kittens))
}

//display kitpics on the kitten show page
function showRoute(req, res) {
  Kitten
    .findById(req.params.id)
    .populate('kitpics')
    .then(kitten => res.json(kitten))
}


//allow users to create kittens
function createKittenRoute(req, res) {
  //req.body.owner = req.currentUser
  Kitten
    .create(req.body)
    .then(kitten => res.status(201).json(kitten))
    .catch(err => res.status(422).json(err.errors))
}

//allow users to create comments on pictures
// function commentCreateRoute(req, res) {
//   req.body.user = req.currentUser
//   Kitten
//     .findById(req.params.id)
//     .then(kitten => {
//       kitten.comments.push(req.body)
//       return kitten.save()
//     })
//     .then(kitten => res.status(201).json(kitten))
// }


module.exports = {
  index: indexRoute,
  show: showRoute,
  createKitten: createKittenRoute

}
