require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const rp = require('request-promise')
const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

const app = express()
app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.post('/message', (req, res) => {
  rp.post('https://translate.yandex.net/api/v1.5/tr.json/translate', {
    qs: {
      key: process.env.YANDEX_KEY,
      text: req.body.message,
      lang: req.body.lang
    },
    json: true
  })
    .then(response => {
      return twilio.messages
        .create({ from: process.env.TWILIO_NUMBER, to: req.body.to, body: response.text[0] })
    })
    .then(() => res.json({ message: 'Translation successful. Message sent' }))
    .catch(err => res.status(500).json(err))
})

app.listen(4000, () => console.log('Express is listening on port 4000'))
