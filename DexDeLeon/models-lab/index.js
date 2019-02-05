require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Manufacturer = require('./models/manufacturer')
const Make = require('./models/make')
const Variant = require('./models/variant')

const app = express()

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.get('/manufacturers', (req, res) => {
  Manufacturer
    .find()
    .then(manufacturers => res.status(200).json(manufacturers))
})

app.get('/makes', (req, res) => {
  Make
    .find()
    .populate('variants')
    .then(makes => res.status(200).json(makes))
})

app.get('/variants', (req, res) => {
  Variant
    .find()
    .then(makes => res.status(200).json(makes))
})

app.listen(4000, () => console.log('We up on 4k! 🙌🏽'))
