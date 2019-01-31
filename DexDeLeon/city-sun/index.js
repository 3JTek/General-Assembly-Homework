require('dotenv').config()

const express = require('express')
const rp = require('request-promise')

const app = express()

const options = {
  url: 'https://api.opencagedata.com/geocode/v1/json',
  qs: {
    key: process.env.OPENCAGE_KEY,
    q: 'London'
  }
}

rp(options)
  .then(res => console.log(JSON.parse(res).results[0].geometry))


app.listen(4000, () => console.log('Express running on 4000'))
