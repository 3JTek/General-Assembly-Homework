require('dotenv').config()

const express = require('express')
const rp = require('request-promise')
const bodyParser = require('body-parser')

//REMOVE TO ENV
const darkSkyKey= '93b14fc29bb085d147394b0d4fa7bed9'
const openCageKey= '5e16e423b862420ebfd8c6bcbca6feab'

const app = express()

app.use(bodyParser.json())

app.route('/forecast')
  .get(function(req, res) {
    const options = {
      uri: 'https://api.opencagedata.com/geocode/v1/json',
      qs: {
        key: openCageKey,
        q: req.body.city,
        limit: 1
      },
      json: true
    }
    rp(options)
      .then((data) => {
        res.status(200).json(data.results[0].geometry)
        const lat = data.results[0].geometry.lat
        const lng = data.results[0].geometry.lng
        getWeather(lat, lng)
      })
  })

function getWeather(lat, lng) {
  console.log('Getting Weather...')
  console.log(lat, lng)
  app.get(function(req, res) {
    console.log('Calling DarkSky')
    const options = {
      uri: `https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}`,
      json: true
    }
    rp(options)
      .then(data => {
        res.status(200).json(data)
        console.log(data)
      })
      .catch(err => res.status(422).json(err.message))
  })
}

app.listen(4000, () => console.log('Up and running on Port 4000'))
