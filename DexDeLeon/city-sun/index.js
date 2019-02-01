require('dotenv').config()

const express = require('express')
const rp = require('request-promise')

const app = express()

app.get('/forecast', (req, res) => {
  getLocationData(req)
    .then(data => {
      const { lat, lng } = data.results[0].geometry
      const location = `${lat},${lng}`
      getWeatherData(location)
        .then(data => {
          const payload = data.daily.data.map(day => {
            return {
              time: day.time,
              summary: day.summary,
              icon: day.icon,
              temperatureHigh: day.temperatureHigh,
              temperatureLow: day.temperatureLow
            }
          })
          res.status(200).json({
            summary: data.daily.summary,
            icon: data.daily.icon,
            data: payload
          })
        })
        .catch(err => res.status(400).json({ message: err.message }))
    })
    .catch(err => res.status(400).json({ message: err.message }))

})

function getLocationData(req){
  const openCageOptions = {
    url: 'https://api.opencagedata.com/geocode/v1/json',
    qs: {
      key: process.env.OPENCAGE_KEY,
      q: req.query.city
    },
    json: true
  }
  return rp(openCageOptions)
}

function getWeatherData(location){
  const darkSkyOptions = {
    url: `https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${location}`,
    qs: {
      units: 'uk2',
      exclude: 'currently,minutely,hourly,alerts,flags'
    },
    json: true
  }

  return rp(darkSkyOptions)
}

app.listen(4000, () => console.log('Express running on 4000'))
