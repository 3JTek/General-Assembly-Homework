const Book = require('../models/book')

function indexRoute(req, res) {
  Book
    .find()
    // .populate({ path: 'author', select: 'name' })
    .then(books => res.json(books))
}

function createRoute(req, res) {
  Book
    .create(req.body)
    .then(book => res.status(201).json(book))
    .catch(err => console.log(err.message))
}

function showRoute(req, res) {
  Book
    .findById(req.params.id)
    .populate([{
      path: 'author', select: 'name'
    },
    {
      path: 'comments.user', select: '-email'
    }])
    .then(book => res.json(book))
}

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  Book
    .findById(req.params.id)
    .then(book => {
      book.comments.push(req.body)
      return book.save()
    })
    .then(book => res.status(201).json(book))
}


module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  commentCreate: commentCreateRoute
}