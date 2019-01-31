require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')

const rp = require('request-promise')

app.use(bodyParser.json())

// mongoose.connect('mongodb://localhost/city-sun')

app.post('/forecast', (req, res) => {
  rp('https://api.opencagedata.com/geocode/v1/json?', {
    qs: {
      key: process.env.GEOKEY,
      q: req.query.city
    },
    json: true
  })
    .then( data => {
      const {lat, lng } = data.results[0].geometry
      rp(`https://api.darksky.net/forecast/${process.env.DARKSKYKEY}/${lat},${lng}`)
        .then(weatherdata => {
          weatherdata = JSON.parse(weatherdata)
          const data =weatherdata.daily.data.map( day => {
            const { time, summary, icon, temperatureHigh, temperatureLow } = day
            return { time, summary, icon, temperatureHigh, temperatureLow }
          })
          const {summary, icon } = weatherdata.daily
          const output = {summary, icon, data}

          res.status(200).json(output)
        })
    })
})

app.listen(4000, () => console.log('Express running on 4000'))
