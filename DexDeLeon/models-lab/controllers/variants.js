const Variant = require('../models/variant')

function indexRoute(req, res){
  Variant
    .find()
    .then(variants => res.json(variants))
}

module.exports = {
  index: indexRoute
}
