require('dotenv').config()

const express = require('express')
const rp = require('request-promise')

const app = express()

const darkSkyKey = process.env.DARKSKY_KEY
const openCageKey = process.env.OPENCAGE_KEY

const darkSkyURL = 'https://api.darksky.net/forecast'
const openCageURL = 'https://api.opencagedata.com/geocode/v1/json'

//Get Geocode from location
app.get('/forecast', function geoCode(req, res, next){
  //Request-promise
  rp(openCageURL,{
    qs: {
      key: openCageKey,
      //Add the city from the initial request as a query string
      q: req.query.city
    },
    //Parse the data returned
    json: true
  })
    .then((data)=>{
      const {lng, lat} = data.results[0].geometry
      //Create a string with the lat and lng and save it to the request to pass it to the next app.get()
      req.geoCode = lat+','+lng
      //Go to next app.get()
      next()
    })
})

//Get weather from Geocode
app.get('/forecast', function darkSky(req, res){
  //Request-promise
  rp(darkSkyURL+'/'+darkSkyKey+'/'+req.geoCode,{
    qs: {
      //Exclude data to speed up API call
      exclude: 'currently,minutely,hourly,flags',
      //Set units to SI
      units: 'uk2'
    },
    //Parse the data returned
    json: true
  })
    .then(weatherData => {
      //Pull out summary, icon and data
      const { summary, icon, data: wData } = weatherData.daily
      //Make a new array from the data with just the fields we want
      const data = wData.map( (day)=>{
        //Pull out the fields
        const { time, summary, icon, temperatureHigh, temperatureLow } = day
        //return an object with just the fields we want
        return { time, summary, icon, temperatureHigh, temperatureLow }
      } )
      //Return the response with the data we want, (default status 200)
      res.json({ summary, icon, data })
    })
})

//If the url doesn't point to forecasts, error
app.all('/*', (req, res) => {
  res.status(404).json({message: 'File not found'})
})

//If an internal error
app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({message: 'This is embarrasing!'})
  next()
})

app.listen(4000, () => console.log('Express is running on port 4000'))
