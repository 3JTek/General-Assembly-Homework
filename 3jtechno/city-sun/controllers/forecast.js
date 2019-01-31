const rp = require('request-promise')
const darkSkyURL = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}`
const openCageURL = `https://api.opencagedata.com/geocode/v1/geojson?&key=${process.env.OPENCAGE_API_KEY}`

function getGeoLocation(city){
  return rp(`${openCageURL}&q=${city}`)
}

function getForecast (lng, lat) {
  return rp(`${darkSkyURL}/${lat},${lng}`)
}

function getMyForecast(req, res) {

  getGeoLocation(req.query.city)
    .then(data => {
      const dataObj = JSON.parse(data)
      const lng = dataObj.features[0].geometry.coordinates[0]
      const lat = dataObj.features[0].geometry.coordinates[1]
      console.log(lng, lat);
      getForecast(lng, lat)
        .then(weatherData => {
          const dailyForecast = JSON.parse(weatherData).daily
          const dataFiltered = dailyForecast.data.map(el => {
            return {
              time: el.time,
              summary: el.summary,
              icon: el.icon,
              temperatureHigh: el.temperatureHigh,
              temperatureLow: el.temperatureLow
            }
          })
          const newArray = {...dailyForecast, data: dataFiltered}
          res.status(200).json(newArray)
        })
    })
}

module.exports = {
  forecast: getMyForecast
}
