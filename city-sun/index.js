require('dotenv').config()

const express = require('express')
const rp = require('request-promise')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/weather', (req, res) => {
  rp(`https://api.darksky.net/forecast/${process.env.darkToken}/${req.body.latitude},${req.body.longitude}`)
    .then(data => res.status(200).json(JSON.parse(data)))
    .catch(err => console.log(err.errors))
})


app.listen(4000, () => console.log('All is working'))
