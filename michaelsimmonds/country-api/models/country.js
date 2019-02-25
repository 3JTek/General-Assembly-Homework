const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  capital: { type: String, required: true },
  population: { type: Number, required: true },
  language: { type: String },
  flag: { type: String }
})

module.exports = mongoose.model('Country', countrySchema)
