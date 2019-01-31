require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')

const rp = require('request-promise')

app.use(bodyParser.json())

// mongoose.connect('mongodb://localhost/city-sun')

app.post('/weather', (req, res) => {
  rp(`https://api.darksky.net/forecast/${process.env.DARKSKYKEY}/${req.body.latitude},${req.body.longitude}`)
    .then(data => res.status(200). json(JSON.parse(data)))
    .catch(err => console.log(err.error))
})


app.listen(4000, () => console.log('Express running on 4000'))
