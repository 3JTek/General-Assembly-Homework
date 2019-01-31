require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const rp = require('request-promise')


const app = express()

app.use(bodyParser.json())


app.get('/forecast', (req, res) => {
  rp('https://api.opencagedata.com/geocode/v1/json?', {
    qs: {
      key: process.env.LOCATION,
      q: req.query.city
    },
    json: true
  })

    .then(data => {
      const { lat, lng } = data.results[0].geometry
      rp(`https://api.darksky.net/forecast/${process.env.FORECAST}/${lat},${lng}`)
        .then(forecastData => {
          forecastData = JSON.parse(forecastData)
          const data = forecastData.daily.data.map(day => {
            const { time, summary, icon, temperatureHight, temperatureLow } = day
            return { time, summary, icon, temperatureHight, temperatureLow }
          })
          const { summary, icon } = forecastData.daily
          const output = { summary, icon, data }
          res.status(200).json(output)
        })

    })

})


app.listen(4000, () => console.log('Express is running on port 4000'))
