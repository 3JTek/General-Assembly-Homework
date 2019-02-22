const mongoose = require('mongoose')

const makeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: {
    type: mongoose.Schema.ObjectId,
    ref: 'Manufacturer',
    required: true
  },
  created: { type: String, required: true }
})

makeSchema.virtual('variants', {
  ref: 'Variant',
  localField: '_id',
  foreignField: 'make'
})

makeSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Make', makeSchema)
