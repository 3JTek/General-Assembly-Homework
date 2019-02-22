const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const app = express()
require('dotenv').config()

mongoose.connect('mongodb://localhost/superheros-db')

app.use(bodyParser.json())

app.use(routes)

app.listen(4000, () => console.log('Superhero server is running -----4000'))
