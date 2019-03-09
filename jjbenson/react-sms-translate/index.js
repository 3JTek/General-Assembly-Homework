require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const rp = require('request-promise')
const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

const app = express()

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

//Get language options from Yandex.
//Maybe the frontend could do this directly?
app.get('/api/langlist',(req, res)=>{
  rp.get('https://translate.yandex.net/api/v1.5/tr.json/getLangs', {
    qs: {
      key: process.env.YANDEX_KEY,
      ui: 'en'
    },
    json: true
  })
    .then( (data)=> res.json(data.langs) )
})

//Get translation of message
app.post('/api/message', (req, res) => {
  rp.post('https://translate.yandex.net/api/v1.5/tr.json/translate', {
    qs: {
      key: process.env.YANDEX_KEY,
      text: req.body.message,
      lang: req.body.lang
    },
    json: true
  })
    //Send text message
    .then(response => {
      req.translation = response.text[0]
      return twilio.messages
        .create({ from: process.env.TWILIO_NUMBER, to: req.body.to, body: response.text[0] })
    })
    .then(() => {
      res.json({
        message: 'Translation successful. Message sent!' ,
        translation: req.translation
      })
    })
    .catch(err => {
      res.status(500).json(err)
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

app.listen(4000, () => console.log('Express is listening on port 4000'))