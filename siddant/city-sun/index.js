require('dotenv').config()

const coordinate = process.env.GEOAPIKEY
const forecast = process.env.OCD_API_KEY

const NodeGeocoder = require('node-geocoder')
var geocoder = NodeGeocoder({
  provider: 'opencage',
  apiKey: forecast
})

// Or using Promise
geocoder.geocode('london')
  .then(function(res) {
    console.log(res)
  })
  .catch(function(err) {
    console.log(err)
  })
