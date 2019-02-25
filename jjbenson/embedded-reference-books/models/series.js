const mongoose = require('mongoose')

const seriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'Author', required: true }
})

seriesSchema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'series'
})

seriesSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Series', seriesSchema)
