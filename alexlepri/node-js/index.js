const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express()

mongoose.connect('mongodb://localhost/Top-Team')

const playerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number},
  country: { type: String},
  DoB: { type: Date, required: true},
  role: { type: String, required: true},
  image: { type: String, required: true},
  salary: { type: String },
  currentTeam: { type: String, required: true}
})

const Player = mongoose.model('Player', playerSchema)

app.use(bodyParser.json())

app.get('/players', (req, res,) => {
  Player
    .find()
    .then(players => res.status(200).json(players))

})


app.post('/players', (req, res) => {
  Player
    .create(req.body)
    .then(player => res.status(201).json(player))
    .catch(err => res.status(422).json(err.errors))
})

app.get('/players/:id', (req, res) => {
  console.log(req)
  Player
    .findById(req.params.id)
    .then(player => res.status(200).json(player))
})



app.listen(4000, () => console.log('Express is running on port 4000'))
