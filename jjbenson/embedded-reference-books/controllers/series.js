const Series = require('../models/series')

function indexRoute(req, res) {
  Series
    .find()
    //Populate referenced properties
    .populate('books')
    .then(series => res.json(series))
}

//Not currently used
function showRoute(req, res) {
  Series
    .findById(req.params.id)
    .populate('books')
    .then(series => res.json(series))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
