const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: mongoose.Schema.ObjectId, ref: 'Team', required: true },
  goals: { type: Number, required: true },
  appearance: { type: Number, required: true },
  image: { type: String, required: true },
  comment: { type: String}
})


// playerSchema.virtual('team', {
//   ref: 'Team',
//   localField: '_id',
//   foreignField: 'name'
// })
//
// playerSchema.set('toJSON', { virtuals: true })


module.exports = mongoose.model('Player', playerSchema)
