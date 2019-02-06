require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const routes = require('./config/routes')

const app = express()

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.use('/api', routes)

app.listen(4000, () => console.log('We up on 4k! 🙌🏽'))
