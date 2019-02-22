require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./config/router')

const app = express()

mongoose.connect('mongodb://localhost/starwars-api-lab')

app.use(bodyParser.json())

app.use(router)

app.listen(4000, () => console.log('Express is running on port 4000'))
