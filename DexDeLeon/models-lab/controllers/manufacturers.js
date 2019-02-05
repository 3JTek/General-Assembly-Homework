const Manufacturer = require('../models/manufacturer')

function indexRoute(req, res){
  Manufacturer
    .find()
    .then(manufacturers => res.json(manufacturers))
}

module.exports = {
  index: indexRoute
}
