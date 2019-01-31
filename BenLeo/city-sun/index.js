require('dotenv').config()

const express = require('express')
const rp = require('request-promise')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.route('/forecast')






app.listen(4000, () => console.log('Up and running on Port 4000'))
