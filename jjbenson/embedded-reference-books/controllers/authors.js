const Author = require('../models/author')

function indexRoute(req, res) {
  Author
    .find()
    //Populate referenced properties
    .populate([{
      path: 'series',
      select: 'name'
    }, {
      path: 'books',
      select: 'title image series',
      //Populate the name of the series
      populate: {
        path: 'series',
        select: 'name'
      }
    }])
    .then(authors => res.json(authors))
}

//Not currently used
function showRoute(req, res) {
  Author
    .findById(req.params.id)
    .populate('series books')
    .then(artist => res.json(artist))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
