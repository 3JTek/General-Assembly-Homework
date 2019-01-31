const Joke = require('../models/joke')

function indexRoute(req, res){
  const { fields, ...query } = req.query
  const select = fields !== undefined ? fields.split(',').join(' ') : ''
  
  Joke
    .find(query)
    .select(select)
    .then(jokes => res.status(200).json(jokes))
}

function createRoute(req, res){
  Joke
    .create(req.body)
    .then(joke => res.status(201).json(joke))
    .catch(err => res.status(422).json(err.message))
}

function showRoute(req, res) {
  Joke
    .findById(req.params.id)
    .then(joke => res.status(200).json(joke))
}

function updateRoute(req, res) {
  Joke
    .findById(req.params.id)
    .then(joke => joke.set(req.body))
    .then(joke => joke.save())
    .then(joke => res.status(200).json(joke))
    .catch(err => console.log(err.message))
}

function deleteRoute(req, res) {
  Joke
    .findById(req.params.id)
    .then(joke => joke.remove())
    .then(() => res.sendStatus(204))
    .catch(err => console.log(err.message))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
