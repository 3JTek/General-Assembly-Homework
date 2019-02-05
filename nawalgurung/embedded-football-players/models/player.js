const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: mongoose.Schema.ObjectId, ref: 'Team', required: true },
  image: { type: String, required: true },
  apperances: { type: Number},
  goals: { type: Number}
})


module.exports = mongoose.model('Player', playerSchema)
