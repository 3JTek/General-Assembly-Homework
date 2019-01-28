const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost/musicapi')

const albumSchema = new mongoose.Schema({
  name: { type: String, required: true},
  artist: { type: String, required: true},
  year: { type: Number },
  genre: { type: String },
  coverArt: { type: String, required: true},
  trackCount: { type: Number, required: true}
})

const Album = mongoose.model('Album', albumSchema)

app.use(bodyParser.json())

app.get('/', (req, res) => {
  Album
    .find()
    .then(albums => res.status(200).json(albums))
})

app.post('/albums', (req, res) => {
  Album
    .create(req.body)
    .then(album => res.status(201).json(album))
    .catch(err => res.status(422).json(err.errors))
})

app.listen(4000, () => console.log('App is listening on Port 4000'))
