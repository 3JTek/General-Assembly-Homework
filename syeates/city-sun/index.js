require('dotenv').config()
const express = require('express')
const rp = require('request-promise')
const app = express()

const openCageAPI = 'https://api.opencagedata.com/geocode/v1/json'
const openCageKey = process.env.OPENCAGE_KEY

const darkSkyAPI = 'https://api.darksky.net/forecast'
const darkSkyKey = process.env.DARKSKY_KEY

app.route('/forecast')
  .post((req, res) => {
    rp({
      url: openCageAPI,
      qs: {
        key: openCageKey
      },
      json: true
    })
  })
  .then( data => {
    const { lat, lng } = data.results[0].geometry
    console.log(lat, lng)
    .Get((req, res) => {
      rp(`${darkSkyAPI}/${darkSkyKey}/${lat},${lng}?units=uk2`)
    }
  })

res.status(200).json()

app.listen(4000, () => console.log('server up'))
