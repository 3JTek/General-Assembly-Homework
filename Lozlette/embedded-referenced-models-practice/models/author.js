const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  book: { type: mongoose.Schema.ObjectId, ref: 'Book', required: true },
  image: { type: String }
})

module.exports = mongoose.model('Author', authorSchema)
