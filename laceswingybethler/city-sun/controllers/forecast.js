const key = process.env.DARK_SKY_TOKEN
const rp = require('request-promise')


function forecast(req, res) {
  const city = req.body.city
  console.log(city)
  const lat = 42.3601
  const lng = -71.0589
  return rp(`https://api.darksky.net/forecast/${key}/${lat},${lng}`)
    .then(() => res.status(200).json(`Your forecast in ${city} has been requested`))
    .catch(err => res.status(422).json(err.message))
}

module.exports = {
  forecast: forecast
}
