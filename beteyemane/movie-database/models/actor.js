const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  movie: { type: mongoose.Schema.ObjectId, ref: 'Movie', required: true }
})

module.exports = mongoose.model('Actor', actorSchema)
