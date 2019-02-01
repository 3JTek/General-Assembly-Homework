require('dotenv').config()

const express = require('express')
const rp = require('request-promise')
// const bodyParser = require('body-parser')

const app = express()

// app.use(bodyParser.json())

// HTTP route for GET forecast, which uses the city query to string
app.get('/forecast', (req, res ) =>{
  // HTTP request made to access lat and lng data based on city query string included in URL
  rp({
    uri: 'https://api.opencagedata.com/geocode/v1/json?',
    qs: {
      key: process.env.GEO_TOKEN,
      q: req.query.city
    },
    json: true
  })
  // Returned data from first HTTP requested in then used make a second HTTP request using the lat and lng data.
    .then(data => {
      const {lat, lng} = data.results[0].geometry
      const token = process.env.DARKSKY_TOKEN
      rp({
        uri: `https://api.darksky.net/forecast/${token}/${lat},${lng}`,
        json: true
      })
        .then((data) => {
          // returned data from HTTP requested is used to extract daily weather report data
          const weatherData = data.daily
          // Summary and icon data made variables
          const {summary, icon } = weatherData

          // Data object mapped over to keep only required fields, saved to new variable
          const reducedData = weatherData.data.map(date => {
            const {time, summary, icon, temperatureHigh, temperatureLow} = date
            return {time, summary, icon, temperatureHigh, temperatureLow}
          })
          // new object is created using the summary, icon and reducedData objects
          const displayData = { summary, icon, reducedData }
          // data is returned to user in new format
          res.status(200).json( displayData )
        })
        .catch(() => res.status(400).json( {message: 'Error, please try again'} ))
    })

})

app.listen(4000, () => console.log('Express is running on port 4000'))
