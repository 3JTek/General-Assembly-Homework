const Book = require('../models/book')

function indexRoute(req, res) {
  Book
    .find()
    .populate([{
      path: 'author', select: 'name'
    },{
      path: 'series',
      select: 'name'
    }])
    .then(books => res.json(books))
}

function showRoute(req, res) {
  Book
    .findById(req.params.id)
    .populate([{
      path: 'author', select: 'name'
    },{
      path: 'series',
      select: 'name books',
      populate: {
        path: 'books',
        select: 'title'
      }
    }])
    .then(book => res.json(book))
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
