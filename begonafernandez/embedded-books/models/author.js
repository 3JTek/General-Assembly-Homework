const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
}, {
  id: false
})

authorSchema.virtual('novels', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'author'
})

authorSchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Author', authorSchema)
