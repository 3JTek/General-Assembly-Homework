const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost/guitardb')

const guitarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  origin: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  body: { type: String },
  neck: { type: String }
})

const Guitar = mongoose.model('Guitar', guitarSchema)

app.use(bodyParser.json())

// INDEX ***********************************************************************
app.get('/guitars', (req, res) => {
  Guitar.find()
    .then(guitars => res.status(200).json(guitars))
})

// CREATE **********************************************************************
app.post('/guitars', (req, res) => {
  Guitar.create(req.body)
    .then(guitar => res.status(201).json(guitar))
    .catch(err => res.status(422).json(err.message))
})

// SHOW ************************************************************************
app.get('/guitars/:id', (req, res) => {
  console.log('req', req.params)
  Guitar.find( { _id: req.params.id } )
    .then(guitar => res.status(200).json(guitar))
    .catch(err => res.status(404).json(err.message))
})

app.listen(4000, () => console.log('Running on 4000'))
