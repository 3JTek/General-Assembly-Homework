const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/wildcats')

const wildcatsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  scientificName: {type: String},
  class: {type: String},
  order: {type: String},
  image: {type: String}
})

const Wildcat = mongoose.model('Wildcat', wildcatsSchema)

app.get('/wildcats', (req, res) => {
  Wildcat
    .find()
    .then(wildcats =>
      res.status(200).json(wildcats))
})


app.listen(4000, () => console.log('Express is running on port 4000'))
