const mongoose = require('mongoose')


const kittenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: {type: String, required: true },
  age: { type: Number },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})


module.exports = mongoose.model('Kitten', kittenSchema)
