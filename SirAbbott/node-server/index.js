const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost/dead-rappers')

const rapperSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: { type: Number},
  placeOfDeath: { type: String },
  dateOfDeath: { type: Date, required: true},
  causeOfDeath: { type: String },
  image: { type: String, required: true }
})

const Rapper = mongoose.model('Rapper', rapperSchema)

app.use(bodyParser.json())

app.get('/rappers', (req, res) => {
  Rapper
    .find()
    .then(rappers => res.status(200).json(rappers))
})

app.post('/rappers', (req, res) => {
  Rapper
    .create(req.body)
    .then(rapper => res.status(201).json(rapper))
    .catch(err => res.status(422).json(err.errors))
})

app.get('/rappers/:id', (req, res) => {
  Rapper
    .findById(req.params.id)
    .then(rapper => res.status(200).json(rapper))
})

app.delete('/rappers/:id', (req, res) => {
  Rapper
    .deleteOne({ _id: req.params.id })
    .then(() => res.status(204).send())
    .catch( err => console.log(err.message))
})

app.listen(4000, () => console.log('Express is running on port 4000'))
