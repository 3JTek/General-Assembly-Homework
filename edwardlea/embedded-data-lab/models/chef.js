const mongoose = require('mongoose')

const chefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  from: { type: String, required: true }
})

chefSchema.virtual('restaurant', {
  ref: 'Restaurant',
  localField: '_id',
  foreignField: 'chef'
})

chefSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    delete json.id
    return json
  }
})

module.exports = mongoose.model('Chef', chefSchema)
