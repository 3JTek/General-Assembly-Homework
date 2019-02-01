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
  const options = {
    uri: `https://api.darksky.net/forecast/${process.env.DARKY_SKY}/${latitude},${longitude}`,
    json: true
  }

  rp(options)
    .then(res => console.log(res.daily))
    .catch(err => console.log(err.message))

}

app.route('/forecast')
  .get(function (req, res) {
    res.json(getlatlng(req.query.city))
  })


app.listen(4000, () => console.log('listening'))
