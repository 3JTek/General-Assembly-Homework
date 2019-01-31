const rp = require('request-promise')
const darkSkyURL = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}`
const openCageURL = `https://api.opencagedata.com/geocode/v1/geojson?&key=${process.env.OPENCAGE_API_KEY}`

function getGeoLocation(city){
  return rp(`${openCageURL}&q=${city}`)
}

function getForecast(lng, lat) {
  return rp(`${darkSkyURL}/${lat},${lng}`)
}

function getMyForecast(req, res) {

  getGeoLocation(req.query.city)

    .then(geoLocData => {
      const geoLocDataObj = JSON.parse(geoLocData)
      const [lng, lat] = geoLocDataObj.features[0].geometry.coordinates

      return getForecast(lng, lat)
    })
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
      const dailyForcastFiltered = {...dailyForecast, data: dataFiltered}
      res.status(200).json(dailyForcastFiltered)
    })
    .catch(err => res.status(422).json(err))
}

module.exports = {
  forecast: getMyForecast
}
