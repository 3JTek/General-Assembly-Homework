require('dotenv').config()
const rp = require('request-promise')
const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
//
// app.use(bodyParser.json())


app.get('/forecast', (req,res) => {
  rp.post(`https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${req.body.latitude},${req.body.longitude}`)
    .then(data => res.status(200).json(JSON.parse(data)))
    .catch(err => console.log(err))

})









app.listen(4000, () => console.log('Express is running on port 4000'))
