const mongoose = require('mongoose')

const guitarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  make: { type: mongoose.Schema.ObjectId, ref: 'Make', required: true },
  manufacturer: { type: mongoose.Schema.ObjectId, ref: 'Manufacturer', required: true },
  image: { type: String, required: true }
})


module.exports = mongoose.model('Guitar', guitarSchema)
