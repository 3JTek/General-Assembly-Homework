const mongoose= require('mongoose')


const gelatoSchema = new mongoose.Schema({
  name: {type: String, required: true},
  ingredients: {type: String, required: true},
  price: {type: Number, required: true},
  description: {type: String},
  image: { type: String }
})

gelatoSchema.virtual('extras', {
  ref: 'Extra',
  localField: '_id',
  foreignField: 'gelato'
})

gelatoSchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Gelato', gelatoSchema)
