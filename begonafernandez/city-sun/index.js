const express = require('express')
const rp = require('request-promise')
require('dotenv').config()

const app = express()

function getlatlngForecast(location) {
  const options = {
    uri: 'https://api.opencagedata.com/geocode/v1/json',
    qs: {
      key: process.env.OPEN_CAGE,
      q: location,
      limit: 1
    },
    json: true
  }

  return rp(options)
    .then(res => {
      const {lat, lng } = res.results[0].geometry
      return getdarkskyforecast(lat, lng)

    })
    .catch(err => err.message)
}


function getdarkskyforecast(latitude, longitude) {
  const options = {
    uri: `https://api.darksky.net/forecast/${process.env.DARKY_SKY}/${latitude},${longitude}`,
    json: true
  }

  return rp(options)
    .then(res => res.daily)
    .catch(err => console.log(err.message))

}

app.route('/forecast')
  .get(function (req, res) {
    getlatlngForecast(req.query.city)
      .then(daily => res.json(daily))
  })


app.listen(4000, () => console.log('listening'))
