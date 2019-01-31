require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const rp = require('request-promise')

const app = express()

app.use(bodyParser.json())

// function forecastRoute(req, res){
//   const options = {
//     uri: 'https://api.opencagedata.com/geocode/v1/json?',
//     qs: {
//       key: process.env.GEO_TOKEN,
//       q: req.query.city
//
//     },
//     json: true
//   }

  // rp(options)
  //   .then(data => {
  //     console.log(data.results[0].geometry)
  //     getForecast(data.results[0].geometry)
    // })
    // .then(res.status(200).json({message: 'Message received'}) )


//     .catch(err => console.log(err))
// }

// function getForecast(location){
//   const options = {
//     uri: `https://api.darksky.net/forecast/${process.env.DARKSKY_TOKEN}/${location.lat}/${location.lng}`,
//     json: true
//   }
//
//   rp(options)
//     .then(data => {
//       console.log(data)
//       res.status(200).json({data})
//     })
//
//
//
//     .catch(err => console.log(err))
// }



app.get('/forecast', (req, res, next) =>{
  rp({
    uri: 'https://api.opencagedata.com/geocode/v1/json?',
    qs: {
      key: process.env.GEO_TOKEN,
      q: req.query.city
    },
    json: true
  })
    .then(data => {
      console.log(data.results[0].geometry)
      const lat = data.results[0].geometry.lat
      const lng = data.results[0].geometry.lng
      const token = process.env.DARKSKY_TOKEN
      console.log(token)
      rp(`https://api.darksky.net/forecast/${token}/${lat},${lng}`

        // `https://api.darksky.net/forecast/${token}/${data.results[0].geometry.lat},${data.results[0].geometry.lng}`
      )
        .then((data) => {
          console.log(JSON.parse(data).hourly)
          res.status(200).json( JSON.parse(data) )
        })
        .catch(err => console.log(err))
        // getForecast(data.results[0].geometry)
    })

})

app.listen(4000, () => console.log('Express is running on port 4000'))
