require('dotenv').config()

const express = require('express')
const rp = require('request-promise')

const app = express()

const openCageOptions = {
  url: 'https://api.opencagedata.com/geocode/v1/json',
  qs: {
    key: process.env.OPENCAGE_KEY,
    q: 'London'
  },
  json: true
}

rp(openCageOptions)
  .then(res => console.log(res.results[0].geometry))
  .catch(err => console.log(err.message))

const darkSkyOptions = {
  url: `https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/51.5074,0.1278`,
  qs: {
    units: 'uk2',
    exclude: 'currently,minutely,hourly,alerts,flags'
  }
}

rp(darkSkyOptions)
  .then(res => console.log(JSON.parse(res).daily))
  .catch(err => console.log(err.message))

app.listen(4000, () => console.log('Express running on 4000'))
