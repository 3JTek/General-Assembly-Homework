const mongoose = require('mongoose')

const manufacturerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  established: { type: String, required: true },
  logo: { type: String, required: true }
})

module.exports = mongoose.model('Manufacturer', manufacturerSchema)
