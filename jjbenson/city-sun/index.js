require('dotenv').config()

const express = require('express')
const rp = require('request-promise')


const app = express()


const darkSkyKey = process.env.DARKSKY_KEY
const openCageKey = process.env.OPENCAGE_KEY

const darkSkyURL = 'https://api.darksky.net/forecast/'
const openCageURL = 'https://api.opencagedata.com/geocode/v1/json'


app.get('/forecast', function geoCode(req, res, next){
  rp(openCageURL,{
    qs: {
      key: openCageKey,
      q: req.query.city
    },
    json: true
  })
    .then((data)=>{
      const {lng, lat} = data.results[0].geometry
      req.geoCode = lat+','+lng
      next()
    })
})

app.get('/forecast', function darkSky(req, res){
  rp(darkSkyURL+darkSkyKey+'/'+req.geoCode,
    {
      qs: {
        units: 'uk2'
      },
      json: true
    })
    .then(weatherData => {
      const { summary, icon, data: wData } = weatherData.daily
      const data = wData.map( (day)=>{
        const { time, summary, icon, temperatureHigh, temperatureLow } = day
        return { time, summary, icon, temperatureHigh, temperatureLow }
      } )
      res.json({ summary, icon, data })
    })
})

app.all('/*', (req, res) => {
  res.status(404).json({message: 'File not found'})
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({message: 'This is embarrasing!'})
  next()
})


//
// app.get('/forecast', (req, res) => {
//   rp('https://api.opencagedata.com/geocode/v1/json',{
//     qs: {
//       key: openCageKey,
//       pretty: 1,
//       no_annotations: 1,
//       q: req.query.city
//     },
//     json: true
//   })
//     .then( (data) => {
//       const {lng, lat} = data.results[0].geometry
//       console.log(lng, lat)
//       rp(`https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}?units=uk2`)
//         .then(weatherData => {
//
//           weatherData = JSON.parse(weatherData)
//           const {summary, icon} = weatherData.daily
//           console.log(summary, icon)
//           const data = weatherData.daily.data.map( (day)=>{
//             const {time, summary, icon, temperatureHigh, temperatureLow} = day
//             return { time, summary, icon, temperatureHigh, temperatureLow }
//           } )
//           const output = { summary, icon, data}
//           // console.log(dailyData)
//           res.json(output)
//         })
//     })
// })

app.listen(4000, () => console.log('Express is running on port 4000'))
