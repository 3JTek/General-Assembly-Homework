require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const port = 4000

const app = express()

app.use(bodyParser.json())
app.use(routes)

app.listen(port, () => console.log(`List'nin' on port ${port}`))
