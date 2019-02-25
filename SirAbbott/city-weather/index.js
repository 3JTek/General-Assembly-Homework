require('dotenv').config()

const express = require('express')
const rp = require('request-promise')

const app = express()

const geoApi = process.env.OPEN_CAGE_API
const weatherApi = process.env.DARK_SKY_API

app.get('/forecast', (req, res) => {
  rp('https://api.opencagedata.com/geocode/v1/json?',{
    qs: {
      key: geoApi,
      q: req.query.city
    },
    json: true
  })
    .then( data => {
      const { lat, lng } = data.results[0].geometry
      console.log(lat, lng)
      rp(`https://api.darksky.net/forecast/${weatherApi}/${lat},${lng}?units=uk2`)
        .then(weatherData => {
          weatherData = JSON.parse(weatherData)
          const data = weatherData.daily.data.map( day => {
            const { time, summary, icon, temperatureHigh, temperatureLow} = day
            return { time, summary, icon, temperatureHigh, temperatureLow }
          })
          const { summary, icon } = weatherData.daily
          const output = { summary, icon, data }

          res.status(200).json(output)
        })
    })
})




app.listen(4000, () => console.log('Express is running on port 4000'))
