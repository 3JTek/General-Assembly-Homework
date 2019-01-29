const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()


mongoose.connect('mongodb://localhost/Carabiners')

const CarabinerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  information: { type: String, required: true }
})

const Carabiner = mongoose.model('Film', CarabinerSchema)

app.use(bodyParser.json())


app.get('/Carabiners', (req, res) => {
  Carabiner
    .find()
    .then(films => res.status(200).json(films))
})

app.post('/Carabiners', (req, res) => {
  Carabiner
    .create(req.body)
    .then(Carabiner => res.status(201).json(Carabiner))
    .catch(err => res.status(422).json(err.errors))
})


app.listen(4000, () => console.log('Express is running on port 4000 yehhaa'))
