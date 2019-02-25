const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  text: { type: String, required: true, maxlength: 250 }
}, {
  timestamps: true
})

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
  neck: { type: String },
  comments: [ commentSchema ]
})

module.exports = mongoose.model('Variant', variantSchema)
