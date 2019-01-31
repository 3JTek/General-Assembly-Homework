require('dotenv').config()

const express = require('express')
const rp = require('request-promise')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())


app.post('/forecast', (req, res) => {
  rp('https://api.opencagedata.com/geocode/v1/json?', {
    qs: {
      key: process.env.LAT_LNG_KEY,
      q: req.query.city
    },
    json: true
  })
    .then( data => {
      const { lat, lng } = data.results[0].geometry
      console.log(data.results[0].geometry)
      rp(`https://api.darksky.net/forecast/${process.env.WEATHER_KEY}/${lat},${lng}`)
        .then(weatherData => {
          weatherData = JSON.parse(weatherData)
          const data = weatherData.daily.data.map( day => {
            const { time, summary, icon, temperatureHigh, temperatureLow } = day
            return { time, summary, icon, temperatureHigh, temperatureLow }
          })
          const { summary, icon } = weatherData.daily
          const output = { summary, icon, data }

          res.status(200).json(output)
        })
    })
})


app.listen(4000, () => console.log('Express is running on port 4000'))
