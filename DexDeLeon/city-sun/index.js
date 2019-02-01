require('dotenv').config()

const express = require('express')
const rp = require('request-promise')

const app = express()


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

function createDailyForecast(data){
  return data.daily.data.map(day => {
    return {
      time: day.time,
      summary: day.summary,
      icon: day.icon,
      temperatureHigh: day.temperatureHigh,
      temperatureLow: day.temperatureLow
    }
  })
}

app.get('/forecast', (req, res) => {
  getLocationData(req)
    .then(locationRes => {
      const { lat, lng } = locationRes.results[0].geometry
      return getWeatherData(`${lat},${lng}`)
    })
    .then(weatherRes => {
      res.status(200).json({
        summary: weatherRes.daily.summary,
        icon: weatherRes.daily.icon,
        data: createDailyForecast(weatherRes)
      })
    })
    .catch(err => res.status(400).json({ message: err.message }))
})

app.listen(4000, () => console.log('Express running on 4000'))
