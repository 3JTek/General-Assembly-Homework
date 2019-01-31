require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const rp = require('request-promise')


// const accountSID = process.env.ACCOUNT
// const authToken = process.env.TOKEN
// const client = require('twilio')(accountSID, authToken)
// const forecast = process.env.FORECAST
// const location = process.env.LOCATION


// API KEY
//https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190131T143149Z.f1b19a84b6209adc.20e9eb95a45784e2b5260150697bb54567fecfd0&text=hello&lang=ru

const app = express()

app.use(bodyParser.json())

app.post('/weather', (req, res) => {
  console.log(`https://api.darksky.net/forecast/${process.env.FORECAST}/${req.body.latitude},${req.body.longitude}`)
  rp(`https://api.darksky.net/forecast/${process.env.FORECAST}/${req.body.latitude},${req.body.longitude}`)
    .then(data => res.status(200).json(JSON.parse(data)))
    .catch(err => console.log(err.errors))
})








app.listen(4000, () => console.log('Express is running on port 4000'))
