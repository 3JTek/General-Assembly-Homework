const Pasta = require('../models/pasta')

//Return all pastas or query pastas
function indexRoute(req, res){
  const { fields, ...query } = req.query
  const select = fields ? fields.split(',') : []
  Pasta
    .find(query, select)
    .then( pastas => res.status(200).json(pastas) )
}

//Create new pasta
function createRoute( req, res ){
  Pasta
    .create(req.body)
    .then( pastas => res.status(200).json(pastas) )
    .catch( err => res.status(422).json(err.errors) )
}

//Show one pasta
function showRoute(req, res){
  Pasta
    .findById(req.params.id)
    .then( pasta => res.status(200).json(pasta) )
    .catch( err => res.status(422).json(err.errors) )
}

//Update an existing pasta
function updateRoute(req, res){
  Pasta
    .findById(req.params.id)
    .then( film => film.set(req.body) )
    .then( film => film.save() )
    .then( film => res.status(200).json(film) )
    .catch( err => res.status(422).json(err.errors) )
}

//Delete a pasta
function deleteRoute(req, res) {
  Pasta
    .findById(req.params.id)
    .then( pasta => pasta.remove() )
    .then( () => res.sendStatus(204) )
    .catch( err => res.status(422).json(err.errors) )
}


module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
