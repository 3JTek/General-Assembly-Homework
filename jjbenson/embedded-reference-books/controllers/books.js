const Book = require('../models/book')

function indexRoute(req, res) {
  Book
    .find()
    //Populate referenced properties
    .populate([{
      path: 'author',
      select: 'name'
    },{
      path: 'series',
      select: 'name'
    }])
    .then(books => res.json(books))
}

function showRoute(req, res) {
  Book
    .findById(req.params.id)
    //Populate referenced properties
    .populate([{
      path: 'author',
      select: 'name'
    },{
      path: 'series',
      select: 'name books',
      //Populate books within a book's series to get outher books in the series
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
