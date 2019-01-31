require('dotenv').config()

const express = require('express')
const rp = require('request-promise')

const app = express()

const geoApi = process.env.OPEN_CAGE_API
const weatherApi = process.env.DARK_SKY_API

app.get('/forecast', (req, res) => {
  rp('https://api.opencagedata.com/geocode/v1/json?',{
    qs: {
      key: geoApi,
      q: req.query.city
    },
    json: true
  })
    .then( data => {
      const { lat, lng } = data.results[0].geometry
      console.log(lat, lng)
      rp(`https://api.darksky.net/forecast/${weatherApi}/${lat},${lng}`)
        .then(data => res.status(200).json(JSON.parse(data).daily.data))
    })
})




app.listen(4000, () => console.log('Express is running on port 4000'))
