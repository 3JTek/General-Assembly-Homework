require('dotenv').config()
const rp = require('request-promise')
const express = require('express')

const coordinate = process.env.GEOAPIKEY
const forecast = process.env.OCD_API_KEY

const app = express()

app.get('/forecast?:location', (req, res) => {
  const NodeGeocoder = require('node-geocoder')
  const geocoder = NodeGeocoder({
    provider: 'opencage',
    apiKey: forecast
  })

  geocoder.geocode(req.query.location)
    .then((data) => {
      const option ={
        url: `https://api.darksky.net/forecast/${coordinate}/${data[0].latitude},${data[0].longitude}`,
        json: true
      }
      rp(option)
        .then(data => {
          res.status(200).json(data)
        })
    })
    .catch(function(err) {
      console.log(err)
    })
})

app.listen(4000, () => console.log('express up on 4000'))
