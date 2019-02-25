require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

mongoose.connect('mongodb://localhost/cars')


app.use(bodyParser.json())

// app.get('/cars', (req, res) => {
//   .find(req.query)
// })

app.use(routes)


app.listen(4000, () => console.log('express is running'))
