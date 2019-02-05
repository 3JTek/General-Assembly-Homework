const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: mongoose.Schema.ObjectId, ref: 'Team', required: true },
  goals: { type: Number, required: true },
  appearance: { type: Number, required: true },
  image: { type: String, required: true },
  comment: { type: String}
})

module.exports = mongoose.model('Player', playerSchema)
