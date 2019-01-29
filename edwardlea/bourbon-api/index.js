const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Creating the Express server
const app = express()

// Creating the new database/model via Mongoose
mongoose.connect('mongodb://localhost/bourbon-fun')

// Creating a model schema with Mongoose to provide a blueprint for the data required.
const bourbonSchema = new mongoose.Schema({
  name: {type: String, required: true},
  manufacturer: {type: String, required: true},
  strength: {type: String, required: true},
  price: {type: String},
  origin: {type: String},
  image: {type: String}
})

// Creating the collection named Bourbon using the Mongoose schema created above
const Bourbon = mongoose.model('Bourbon', bourbonSchema)

// Body-Parser added to the serve to be used with middleware
app.use(bodyParser.json())

// Index request
app.get('/bourbons',(req, res) => {
  Bourbon
    .find()
    .then(bourbons => res.status(200).json(bourbons))
})

// Add request
app.post('/bourbons', (req, res) => {
  Bourbon
    .create(req.body)
    .then(bourbon => res.status(201).json(bourbon))
    .catch(err => res.status(422).json(err.errors))
})

// Show request
app.get('/bourbons/:id',(req, res) => {
  Bourbon
    .findById(req.params.id)
    .then(bourbon => res.status(200).json(bourbon))
})

// handling errors by the requestor
app.all('/*', (req, res) => {
  res.status(404).json({ message: 'Page not found' })
})

// handling errors with server / code
app.use((err, req, res, next) => {

  res.status(500).json({ message: 'Something has broken' })
  next(err)
})

app.listen(4000, () => console.log('Listening on port 4000'))
