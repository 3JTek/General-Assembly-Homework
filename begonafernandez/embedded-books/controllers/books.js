const Book = require('../models/book')

function indexRoute(req, res) {
  Book
    .find()
    .populate({ path: 'author', select: 'name' })
    .then(books => res.json(books))
}

function showRoute(req, res) {
  Book
    .findById(req.params.id)
    .populate('author')
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
  commentCreate: commentCreateRoute
}
