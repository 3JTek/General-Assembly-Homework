require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const routes = require('./config/routes')

const app = express()

mongoose.connect(process.env.MONGODB_URI)

// mongoose.connect('mongdb://localhost:4000/blog')

app.use(bodyParser.json())

app.use('/api', routes)

app.listen(4000, () => console.log('Express is running on Port 4000'))
