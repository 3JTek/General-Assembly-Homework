require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const rp = require('request-promise')

const app = express()

app.use(bodyParser.json())

app.get('/forecast', (req, res ) =>{
  rp({
    uri: 'https://api.opencagedata.com/geocode/v1/json?',
    qs: {
      key: process.env.GEO_TOKEN,
      q: req.query.city
    },
    json: true
  })
    .then(data => {
      const {lat, lng} = data.results[0].geometry
      const token = process.env.DARKSKY_TOKEN
      rp(`https://api.darksky.net/forecast/${token}/${lat},${lng}`)
        .then((data) => {
          const weatherData = JSON.parse(data).daily

          const {summary, icon } = weatherData

          const dataNew = weatherData.data.map(date => {
            const {time, summary, icon, temperatureHigh, temperatureLow} = date
            return {time, summary, icon, temperatureHigh, temperatureLow}
          })
          const displayData = { summary, icon, dataNew }

          res.status(200).json( displayData )
        })
        .catch(err => console.log(err))
    })

})

app.listen(4000, () => console.log('Express is running on port 4000'))
