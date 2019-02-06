require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()


mongoose.connect(process.env.MONGODB_URI)
const routes = require('./config/routes')


app.use(bodyParser.json())

app.use('/api', routes)

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))
