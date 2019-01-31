require('dotenv').config()

const express = require('express')
const rp = require('request-promise')


const app = express()


const darkSkyKey = process.env.DARKSKY_KEY
const openCageKey = process.env.OPENCAGE_KEY


rp('https://api.opencagedata.com/geocode/v1/json',{
  qs: {
    key: openCageKey,
    pretty: 1,
    no_annotations: 1,
    q: 'Croydon'
  },
  json: true
}).then( (data) => console.log(data))


//https://api.opencagedata.com/geocode/v1/json?key=05d1ee367fb14936a8372232782c01f1&pretty=1&no_annotations=1&q=Croydon
