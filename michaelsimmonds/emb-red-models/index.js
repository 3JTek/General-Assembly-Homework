require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

app.use(express.static(`${__dirname}/dist`))

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.use('/api', routes)

app.get('*/', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))// this allows refresh on heroku

app.listen(4000, () => console.log('Express is up and running on port 4000'))
