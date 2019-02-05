const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: mongoose.Schema.ObjectId, ref: 'Team', required: true },
  image: { type: String, required: true },
  appearance: { type: Number},
  goals: { type: Number}
})

// playerSchema.virtual('singles', {
//   ref: 'Track',
//   localField: '_id',
//   foreignField: 'artist'
// })

module.exports = mongoose.model('Player', playerSchema)
