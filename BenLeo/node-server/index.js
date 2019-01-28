const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('http://localhost/musicapi')

const albumSchema = new mongoose.Schema({
  name: { type: String, required: true},
  artist: { type: String, required: true},
  year: Number,
  genre: String,
  coverArt: { type: String, required: true},
  trackCount: { type: Number, required: true}
})

const Album = mongoose.model('Album', albumSchema)

app.use(bodyParser.json())

app.get('/', (res, req) => {

})

app.listen(4000, () => console.log('App is listening on Port 4000'))
