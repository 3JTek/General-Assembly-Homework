const mongoose = require('mongoose')

const superheroSchema = new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String, required: true},
  gender: {type: String, required: true},
  race: {type: String, required: true},
  alterEgo: {type: String, required: true},
  power: {type: String, required: true},
  publisher: {type: String},
  occupation: {type: String},
  debutDate: {type: Date}
})

module.exports =  mongoose.model('Superhero', superheroSchema)
