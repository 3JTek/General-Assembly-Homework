const mongoose = require('mongoose')

const pastaSchema = new mongoose.Schema({

  type: { type: String, required: true},
  image: { type: String, required: true},
  description: { type: String, required: true},
  origin: { type: String},
  translation: { type: String}
})

module.exports = mongoose.model('Pasta', pastaSchema)
