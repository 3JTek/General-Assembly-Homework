require('dotenv').config()

const mongoose = require('mongoose')
mongoose.plugin(require('mongoose-unique-validator'))
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const routes = require('./config/routes')

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.use('/api', routes)

app.listen(process.env.PORT, () => console.log(`express up on Port ${process.env.PORT}`))
