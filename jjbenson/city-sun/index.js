require('dotenv').config()

const express = require('express')
const rp = require('request-promise')


const app = express()


const darkSkyKey = process.env.DARKSKY_KEY
const openCageKey = process.env.OPENCAGE_KEY



app.get('/forecast', function geoCode(req, res, next){
  rp('https://api.opencagedata.com/geocode/v1/json',{
    qs: {
      key: openCageKey,
      q: req.query.city
    },
    json: true
  })
    .then((data)=>{
      const {lng, lat} = data.results[0].geometry
      req.lng = lng
      req.lat = lat
      next()
    })
})
app.get('/forecast', function darkSky(req, res){
  rp(`https://api.darksky.net/forecast/${darkSkyKey}/${req.lat},${req.lng}?units=uk2`)
    .then(weatherData => {
      weatherData = JSON.parse(weatherData)
      const {summary, icon, data: wData} = weatherData.daily
      const data = wData.map( (day)=>{
        const {time, summary, icon, temperatureHigh, temperatureLow} = day
        return { time, summary, icon, temperatureHigh, temperatureLow }
      } )
      const output = { summary, icon, data}
      res.json(output)
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
//https://api.opencagedata.com/geocode/v1/json?key=05d1ee367fb14936a8372232782c01f1&pretty=1&no_annotations=1&q=Croydon
