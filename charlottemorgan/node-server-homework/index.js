const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/puppy-time')

const puppySchema = new mongoose.Schema ({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  image: { type: String, required: true }
})

const Puppy = mongoose.model('Puppy', puppySchema)

app.use(bodyParser.json())

//find all the puppies
app.get('/puppies', (req, res) => {
  Puppy
    .find()
    .then(puppies => res.status(200).json(puppies))
})

//create a new puppy
app.post('/puppies', (req, res) => {
  Puppy
    .create(req.body)
    .then(puppy => res.status(201).json(puppy))
})

//show a specific puppy
app.get('/puppies/:id', (req, res) => {
  Puppy
    .findById(req.params.id)
    .then(puppy => res.status(200).json(puppy))
})

app.delete('/puppies/:id', (req, res) => {
  Puppy
    .deleteOne({ _id: req.params.id })
    .then(() => res.status(204))
    .catch( err => console.log(err))
})

app.listen(4000, () => console.log('Express is running on port 4000'))
