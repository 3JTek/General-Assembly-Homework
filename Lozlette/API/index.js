const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost/games')

const gameSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  NumberPlayers: { type: Number, required: true},
  AgeRange: { type: String, required: true },
  image: { type: String, required: true }
})

const Game = mongoose.model('Game', gameSchema)

app.use(bodyParser.json())

app.get('/games', (req, res) => {
  console.log('working')
  Game
    .find()
    .then(games => res.status(200).json(games))
})

app.post('/games', (req, res) => {
  Game
    .create(req.body)
    .then(game => res.status(201).json(game))
    .catch(err => res.status(422).json(err.errors))
})
app.listen(4000, () => console.log('Express is running on port 4000'))
