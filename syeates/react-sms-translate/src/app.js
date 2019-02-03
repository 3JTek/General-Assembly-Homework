const express = require('express')
const bodyPaser = require('body-parser')
const rp = require('request-promise')
const app = express()


const accountSid = process.env.accountSid
const authToken = process.env.authToken
const twilio = require('twilio')(accountSid, authToken)


app.use(bodyPaser.json())

app.route('/message')
  .post((req, res) => {
    rp({
      url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
      qs: {
        key: process.env.yandexKey,
        text: req.body.text,
        lang: req.body.lang
      },
      json: true
    })
      .then(response => {
        console.log(response)
        return twilio.messages
          .create({
            body: response.text[0],
            from: '+447480485825',
            to: '+447747034495'
          })
          .then(() => res.json({ message: 'SMS sent' }))
          .catch(err => console.log(err))
      })
  })

app.listen(4000, () => console.log('server up'))
