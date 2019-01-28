const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost/bourbon-fun')

const bourbonSchema = new mongoose.Schema({
  name: {type: String, required: true},
  manufacturer: {type: String, required: true},
  strength: {type: String, required: true},
  price: {type: String},
  origin: {type: String},
  image: {type: String}
})

const Bourbon = mongoose.model('Bourbon', bourbonSchema)

app.use(bodyParser.json())

app.get('/bourbons',(req, res) => {
  Bourbon
    .find()
    .then(bourbons => res.status(200).json(bourbons))
})

app.post('/bourbons', (req, res) => {
  Bourbon
    .create(req.body)
    .then(bourbon => res.status(201).json(bourbon))
    .catch(err => res.status(422).json(err.errors))
})

app.get('/bourbons/:id',(req, res) => {
  Bourbon
    .findById(req.params.id)
    .then(bourbon => res.status(200).json(bourbon))
})

// handling errors by the requestor
app.all('/*', (req, res) => {
  res.status(404).json({ message: 'Not found' })
})

// handling errors with server / code
app.use((err, req, res, next) => {

  res.status(500).json({ message: 'Oops, this is embarassing!' })
  next(err)
})

app.listen(4000, () => console.log('Listening on port 4000'))
