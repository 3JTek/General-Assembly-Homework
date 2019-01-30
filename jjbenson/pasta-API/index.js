const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routes = require('./config/routes')


const app = express()



mongoose.connect('mongodb://localhost/Top-Pasta')

app.use( bodyParser.json() )

app.use(routes)

app.listen(4000, () => console.log('IT IS WORKING IN PORT 4000'))
