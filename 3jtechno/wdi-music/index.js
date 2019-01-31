require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const port = 4000

const app = express()

mongoose.connect('mongodb://localhost/wdi-track')

app.use(bodyParser.json())
app.use(routes)

app.listen(port, () => console.log(`listening on port ${port}`))
