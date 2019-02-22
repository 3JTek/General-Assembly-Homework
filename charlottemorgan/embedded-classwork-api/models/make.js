const mongoose = require('mongoose')

const makeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: { type: mongoose.Schema.ObjectId, ref: 'Manufacturer', required: true },
  created: { type: String }
})

makeSchema.virtual('guitars', {
  ref: 'Guitar',
  localField: '_id',
  foreignField: 'make'
})

makeSchema.set('toJSON', { virtuals: true })


module.exports = mongoose.model('Make', makeSchema)
