const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express()

mongoose.connect('mongodb://localhost/player')

const playerSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number},
  country: { type: String, required: true},
  DoB: { type: Date, required: true},
  role: { type: String, required: true},
  image: { type: String, required: true},
  salary: { type: Number},
  currentTeam: { type: String, required: true}
})

const Player = mongoose.model('Player', playerSchema)

app.use(bodyParser.json())




app.listen(4000, () => console.log('Express is running on port 4000'))
