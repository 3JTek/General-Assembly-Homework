const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
mongoose.connect('mongodb://localhost/wdi-books')

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  releaseDate: Date,
  image: {type: String, required: true}
})

const Book = mongoose.model('Book', bookSchema)
app.use(bodyParser.json())

app.get('/books', (req, res) => {
  Book
    .find()
    .then(books => res.status(200).json(books))
})

app.get('/books/:id', (req, res) => {
  console.log(req.body)
  Book
    .find({_id: req.params.id})
    .then(book => res.status(200).json(book))
    .catch(err => res.status(404).json(err.message))
})


app.post('/books', (req, res) => {
  Book
    .create(req.body)
    .then(book => res.status(201).json(book))
    .catch(err => res.status(422).json(err.message))
})

app.listen(4000, () => console.log('listening'))
