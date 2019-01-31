require('dotenv').config()

const express = require('express')
const rp = require('request-promise')


const app = express()


const darkSkyKey = process.env.DARKSKY_KEY
const openCageKey = process.env.OPENCAGE_KEY


app.get('/forecast', (req, res) => {
  rp('https://api.opencagedata.com/geocode/v1/json',{
    qs: {
      key: openCageKey,
      pretty: 1,
      no_annotations: 1,
      q: 'Croydon, UK'
    },
    json: true
  })
    .then( (data) => {
      const {lng, lat} = data.results[0].geometry
      console.log(lng, lat)
      rp(`https://api.darksky.net/forecast/${darkSkyKey}/${lng},${lat}`)
        .then(weatherData => {
          weatherData = JSON.parse(weatherData)
          const dailyData = weatherData.daily.data.map( (day)=>{
            const {time, summary, icon, temperatureHigh, temperatureLow} = day
            return { time, summary, icon, temperatureHigh, temperatureLow }
          } )
          console.log(dailyData)
          res.json(dailyData)
        })
    })
})

app.listen(4000, () => console.log('Express is running on port 4000'))
//https://api.opencagedata.com/geocode/v1/json?key=05d1ee367fb14936a8372232782c01f1&pretty=1&no_annotations=1&q=Croydon
