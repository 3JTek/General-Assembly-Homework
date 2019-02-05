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

function createRoute(req, res) {
  Book
    .create(req.body)
    .then(fish => res.status(201).json(fish))
    .catch(err => console.log(err.message))
}

function updateRoute(req, res) {
  Book
    .findById(req.params.id)
    .then(book => book.set(req.body))
    .then(book => book.save())
    .then(book => res.status(200).json(book))
    .catch(err => res.status(422).json(err.errors))
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
  commentCreate: commentCreateRoute,
  create: createRoute,
  update: updateRoute
}
