require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

const routes = require('./config/routes')

mongoose.connect('mongodb://localhost/modelsblog')

app.use(bodyParser.json())

app.use('/api', routes)

app.listen(4000, () => console.log('Up and running on port 4000'))
