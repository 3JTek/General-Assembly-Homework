const Pasta = require('../models/pasta')

function indexRoute(req, res){
  Pasta
    .find()
    .then( pastas => res.status(200).json(pastas))
}

function createRoute(req, res){
  Pasta
    .create(req.body)
    .then( pastas => res.status(200).json(pastas))
    .catch( err => res.status(422).json(err.errors) )
}

function showRoute(req, res){
  Pasta
    .findById(req.params.id)
    .then(pasta => res.status(200).json(pasta))
    .catch( err => res.status(422).json(err.errors) )
}

function updateRoute(req, res){
  Pasta
    .findById(req.params.id)
    .then(film => film.set(req.body))
    .then(film => film.save())
    .then(film => res.status(200).json(film))
    .catch(err => res.status(422).json(err.errors))
}

function deleteRoute(req, res) {
  Pasta
    .findById(req.params.id)
    .then(pasta => pasta.remove())
    .then(() => res.sendStatus(204))
    .catch(err => res.status(422).json(err.errors))
}



module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
