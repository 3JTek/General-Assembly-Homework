const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost/dead-rappers')

const rapperSchema = new mongoose.Schema({
  name: {type: String, required: true},
  dateOfBirth: { type: Date, required: true},
  deathOfDeath: { type: Date, required: true},
  causeOfDeath: { type: String },
  image: { type: String, required: true }

})


// db.get('/rappers', (req, res) => {
//
// })

app.listen(4000, () => console.log('Express is running on port 4000'))
