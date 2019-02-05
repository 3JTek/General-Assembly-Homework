require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Manufacturer = require('./models/manufacturer')
const Make = require('./models/make')
const Guitar = require('./models/guitar')

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
    .populate('guitars')
    .then(makes => res.status(200).json(makes))
})

app.get('/guitars', (req, res) => {
  Guitar
    .find()
    .then(guitars => res.status(200).json(guitars))
})

app.listen(4000, () => console.log('Up and running on port 4000'))
