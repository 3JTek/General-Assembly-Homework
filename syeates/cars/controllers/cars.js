const Car = require( '../models/car')


function indexRoute(req, res, next){

  // const fields = (req.query.fields.split(','))
  console.log(req.query)
  Car
    .find(req.query)
    .then(cars => res.status(200).json(cars))
    .catch(next)
}


function createRoute(req, res, next){
  Car
    .create(req.body)
    .then(car => res.status(201).json(car))
    .catch(err => res.status(422).json(err.errors))
    .catch(next)
}

function updateRoute(req, res, next){
  Car
    .findById(req.params.id)
    .then(car => car.set(req.body))
    .then(car => car.save())
    .then(car => res.json(car))
    .catch(next)
}



function showRoute(req, res, next){
  Car
    .findById(req.params.id)
    .then(car => res.json(car))
    .catch(next)
}

function deleteRoute(req, res, next){
  Car
    .findById(req.params.id)
    .then( car => car.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
