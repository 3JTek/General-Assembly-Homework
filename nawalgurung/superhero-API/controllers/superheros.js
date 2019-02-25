const Superhero = require('../model/superhero')

function getIndex(req, res) {
  Superhero
    .find()
    .then(superheros => res.status(200).json(superheros))
}

function createSuperHero(req, res) {
  Superhero
    .create(req.body)
    .then(superhero => res.status(200).json(superhero))
    .catch(err => res.status(422).json(err.errors))

}

function showSuperHero(req, res) {
  Superhero
    .findById(req.params.id)
    .then(superhero => res.status(200).json(superhero))
}

function updateSuperHero(req, res) {
  Superhero
    .findById(req.params.id)
    .then(superhero => superhero.set(req.body))
    .then(superhero => superhero.save())
    .then(superhero => res.status(200).json(superhero))
    .catch(err => res.status(422).json(err.errors))
}

function deleteSuperHero(req, res){
  Superhero
    .findById(req.params.id)
    .then(superhero => superhero.set(req.body))
    .then(superhero => superhero.save())
    .then(superhero => res.status(200).json(superhero))
    .catch(err => res.status(422).json(err.errors))
}


module.exports = {
  index: getIndex,
  create: createSuperHero,
  show: showSuperHero,
  edit: updateSuperHero,
  delete: deleteSuperHero
}
