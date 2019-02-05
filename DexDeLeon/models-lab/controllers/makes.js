const Make = require('../models/make')

function indexRoute(req, res){
  Make
    .find()
    .then(makes => res.json(makes))
}

module.exports = {
  index: indexRoute
}
