require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const requestPromise = require('request-promise')

app.use(bodyParser.json())

app.get('/forecast', (req, res) => {
  requestPromise(`https://api.opencagedata.com/geocode/v1/json?q=${req.query.city}&key=${process.env.geocodingToken}`, {
    json: true
  })
    .then( data => {
      const { lat, lng } = data.results[0].geometry
      requestPromise(`https://api.darksky.net/forecast/${process.env.forecastToken}/${lat},${lng}`,{json: true})
        .then(forecastData => {
          //json parse converts data from the webpage from a string to an object
          // forecastData = JSON.parse(forecastData)
          const data = forecastData.daily.data.map(day => {
            const { time, summary, icon, temperatureHigh, temperatureLow } = day
            return { time, summary, icon, temperatureHigh, temperatureLow }
          })
          const { summary, icon } = forecastData.daily
          const output = { summary, icon, data }
          res.status(200).json(output)
        })
    })
})

app.listen(4000, () => console.log('Express running on 4000'))
