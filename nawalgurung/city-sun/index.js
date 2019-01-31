require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const rp = require('request-promise')

app.use(bodyParser.json())


app.get('/forecast', (req, res) => {
  rp(`https://api.opencagedata.com/geocode/v1/json?q=${req.query.city}&key=${process.env.GEOCODE_KEY}`)
    .then(data => {
      const long = JSON.parse(data).results[0].geometry.lng
      const lat = JSON.parse(data).results[0].geometry.lat
      console.log(long,lat )

      rp(`https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${lat},${long}`)
        .then(forecastData => {
          forecastData = JSON.parse(forecastData)
          console.log(forecastData)

          const data = forecastData.daily.data.map(day => {
            const { time, summary, icon, temperatureHigh, temperatureLow } = day
            return { time, summary, icon, temperatureHigh, temperatureLow }
          })
          const { summary, icon } = forecastData.daily
          const output = { summary, icon, data }
          res.status(200).json(output)
        })
        .catch(err => err.message)
    })
    .catch(err => console.log(err))
})



app.listen(4000, () => console.log('Express Server is Running ------- 4000'))
