const mongoose = require('mongoose')


const hairdryerSchema = new mongoose.Schema({
  name: { type: String, required: true},
  brand: { type: String, required: true },
  price: { type: Number, required: true},
  description: { type: String, required: true },
  image: { type: String, required: true }
})

module.exports= mongoose.model('Hairdryer', hairdryerSchema)
