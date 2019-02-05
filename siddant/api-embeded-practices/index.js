require('dotenv').config()
const mongoose = require('mongoose')


const express = require('express')
const bodyParser = require('body-parser')

const app = express()


mongoose.connect(process.env.MONGODB_URI)
const routes = require('./config/routes')

app.use(bodyParser.json())

app.use('/api', routes)

app.listen(process.env.PORT, () => console.log(`Up and running on port ${process.env.PORT}`))
