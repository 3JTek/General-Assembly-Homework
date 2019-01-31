require('dotenv').config()
const express = require('express')
const rp = require('request-promise')

const darkSkyToken = process.env.DARKSKY_TOKEN
const geoToken = process.env.GEO_TOKEN

const app = express()
let forecast

function getForecast({ lat, lng }){
  const options = {
    uri: `https://api.darksky.net/forecast/${darkSkyToken}/${lat},${lng}`,
    json: true
  }
  rp(options)
    .then(res => console.log(JSON.stringify(res.daily)))

}


app.get('/weather', (req, res, next) => {
  const options = {
    uri: 'https://api.opencagedata.com/geocode/v1/json',
    qs: {
      q: req.query.city,
      key: geoToken
    },
    json: true
  }

  rp(options)
    .then(data => {
      const {lat, lng} = data.results[0].geometry

      rp(`https://api.darksky.net/forecast/${darkSkyToken}/${lat},${lng}`)
        .then((data) => {
          return JSON.parse(data).daily
        })

      .then(response => res.status(200).json( response ))
    })
})








app.listen(4000, () => console.log('express running on 4000'))
