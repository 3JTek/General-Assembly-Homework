const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//
const app = express()

mongoose.connect('mongodb://localhost/book-api')

// the schematic for things to be created, in this case Book
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true }
})

const Book = mongoose.model('Book', bookSchema)

// enables us to take the body portion of an incoming request and expose it on req.body
app.use(bodyParser.json())

// Book.create({ title: 'Humbolt Gift', author: 'Saul Bellow', year: 1975 })
//   .then(book => console.log(book))

// to find the all current info in the API, i.e. all the Books
app.get('/books', (req, res) => {
  Book
    .find()
    .then(book => res.status(200).json(book))
})

// to create a specific instance of Book
app.post('/books', (req, res) => {
  Book
    .create(req.body)
    .then(book => res.status(201).json(book))
    .catch(err => res.status(422).json(err.errors))
})

// makes port 4000 listen to various requests made
app.listen(4000, () => console.log('Running on port 4000'))
