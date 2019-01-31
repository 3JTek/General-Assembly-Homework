const express = require('express')
const rp = require('request-promise')
require('dotenv').config()

const app = express()

function getlatlng(location) {
  const options = {
    uri: 'https://api.opencagedata.com/geocode/v1/json',
    qs: {
      key: process.env.OPEN_CAGE,
      q: location,
      limit: 1
    },
    json: true
  }

  rp(options)
    .then(res => {
      getdarkskyforecast(res.results[0].geometry.lat, res.results[0].geometry.lng)

    })
    .catch(err => err.message)
}


function getdarkskyforecast(latitude, longitude) {
  console.log(latitude)
  console.log(longitude)
  const options = {
    uri: `https://api.darksky.net/forecast/f1ad328526d3cf92ffe7f8f9de557cfc/${latitude},${longitude}`,
    json: true
  }

  rp(options)
    .then(res => console.log(res.daily))
    .catch(err => console.log(err.message))

}
// getlatlng('London, uk')

app.listen(4000, () => console.log('listening'))
