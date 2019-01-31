require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const rp = require('request-promise')

const translate = process.env.TRANSLATE
const accountSID = process.env.ACCOUNT
const authToken = process.env.TOKEN
const client = require('twilio')(accountSID, authToken)
const forecast = process.env.FORECAST


// API KEY
//https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190131T143149Z.f1b19a84b6209adc.20e9eb95a45784e2b5260150697bb54567fecfd0&text=hello&lang=ru

const app = express()

app.use(bodyParser.json())

app.post('/message', (req, res) => {
  rp.post('https://translate.yandex.net/api/v1.5/tr.json/translate', {
    qs: {
      key: translate,
      text: req.body.text,
      lang: req.body.lang
    },
    json: true

  })
    .then(response => {
      console.log(response)
      return client.messages
        .create({
          body: 'Read this message and you will be happy',
          from: '+447481342394',
          to: '+447450643047'
        })
    })
    .then(() => res.json({ message: 'Success' }))
    .done()
})







app.listen(4000, () => console.log('Express is running on port 4000'))
