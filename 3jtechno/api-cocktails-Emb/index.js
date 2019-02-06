require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

const routes = require('./config/routes')
mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())
app.use('/api', routes)

app.listen(4000, () => console.log('listening on port 4000'))
