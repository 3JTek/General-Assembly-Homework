const express = require('express')
const mongoose = require('mongoose')

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

app.get('/guitars', (req, res) => {
  Guitar.find()
    .then(guitars => res.status(200).json(guitars))
})

app.post('/guitars', (req, res) => {
  res.status(201).json({ route: 'create' })
})

app.listen(4000, () => console.log('Running on 4000'))
