require('dotenv').config()

const rp = require('request-promise')
const express = require('express')

const app = express()

app.get('/forecast', (req, res) => {
  rp({
    method: 'GET',
    url: 'https://api.opencagedata.com/geocode/v1/json',
    qs: {
      key: process.env.OPEN_CAGE_KEY,
      q: req.query.city
    },
    json: true
  })
    .then(geoResponse => {
      const { lat, lng } = geoResponse.results[0].geometry
      return { lat, lng }
    })
    .then(latLng => {
      return rp({
        method: 'GET',
        url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/${latLng.lat},${latLng.lng}`,
        qs: { units: 'si' },
        json: true
      })
    })
    .then(weatherResponse => {
      const forecast = weatherResponse.daily

      forecast.data = forecast.data.map(day => {
        return {
          time: day.time,
          summary: day.summary,
          icon: day.icon,
          temperatureHigh: day.temperatureHigh,
          temperatureLow: day.temperatureLow
        }
      })

      return forecast
    })
    .then(forecast => {
      res.json(forecast)
    })
})

app.listen(4000, () => console.log('Up and atom'))
