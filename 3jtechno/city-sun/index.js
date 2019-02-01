require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const port = 4000

app.use(bodyParser.json())
app.use(routes)

app.listen(port, console.log(`listening to port ${port}`))
