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



app.listen(4000, () => console.log('Listening on port 4000'))
