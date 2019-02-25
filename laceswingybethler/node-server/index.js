const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost/wildcats')

const wildcatsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  scientificName: {type: String},
  class: {type: String},
  origin: {type: String},
  image: {type: String}
})

const Wildcat = mongoose.model('Wildcat', wildcatsSchema)

app.use(bodyParser.json())

app.get('/wildcats', (req, res) => {
  Wildcat
    .find()
    .then(wildcats =>
      res.status(200).json(wildcats))
})

app.post('/wildcats', (req, res) => {
  Wildcat
    .create(req.body)
    .then(wildcat => res.status(201).json(wildcat))
    .catch(err => res.status(422).json(err.errors))
})

// app.show('/wildcats/:id', (req, res => {
//   Wildcat
//     .find()
//     .then(wildcats =>
//       res.status(200).json(wildcars.params.id))
//     .catch(err => res.status(404).json(err.errors))
//   })


app.listen(4000, () => console.log('Express be running on port 4000'))
