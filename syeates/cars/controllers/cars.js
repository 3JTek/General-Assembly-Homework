const Car = require( '../models/car');


function indexRoute(req, res, next){

  // const fields = (req.query.fields.split(','))
  console.log(req.query)
  Car
    .find(req.query)
    .then(cars => res.status(200).json(cars))
}


function createRoute(req, res){
  Car
    .create(req.body)
    .then(car => res.status(201).json(car))
    .catch(err => res.status(422).json(err.errors))
}

function updateRoute(req, res){
  Car
    .findById(req.params.id)
    .then(car => car.set(req.body))
    .then(car => car.save())
    .then(car => res.json(car))
}



function showRoute(req, res){
  Car
    .findById(req.params.id)
    .then(car => res.json(car))
}

function deleteRoute(req, res){
  Car
  .findById(req.params.id)
  .then(car => car.remove())
  .then(car => res.sendStatus(204))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
}
