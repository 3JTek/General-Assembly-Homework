const mongoose = require('mongoose')

const variantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  make: { type: mongoose.Schema.ObjectId, ref: 'Make', required: true },
  manufacturer: {
    type: mongoose.Schema.ObjectId,
    ref: 'Manufacturer',
    required: true
  },
  image: { type: String, required: true },
  body: { type: String },
  neck: { type: String }
})

module.exports = mongoose.model('Variant', variantSchema)
