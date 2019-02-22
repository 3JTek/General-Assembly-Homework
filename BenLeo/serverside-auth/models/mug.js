const mongoose = require('mongoose')

const mugSchema = new mongoose.Schema({
  name: { type: String, required: true},
  brand: { type: String, required: true},
  price: { type: Number, required: true},
  material: { type: String},
  image: { type: String}
})

module.exports = mongoose.model('Mug', mugSchema)
