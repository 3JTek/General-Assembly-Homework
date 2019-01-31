const mongoose = require('mongoose')

const shipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  faction: { type: String, required: true },
  image: { type: String, required: true},
  classification: { type: String },
  weapons: { type: Array}
})

module.exports = mongoose.model('Ship', shipSchema)
