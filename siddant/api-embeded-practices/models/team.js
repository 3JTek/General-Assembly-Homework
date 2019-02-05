const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stadium: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  established: { type: Date, required: true },
  league: { type: mongoose.Schema.ObjectId, ref: 'League', required: true }
})


teamSchema.virtual('players', {
  ref: 'Player',
  localField: '_id',
  foreignField: 'team'
})


teamSchema.set('toJSON', {
  virtuals: true
})


teamSchema.set('toJSON', {virtuals: true})

module.exports = mongoose.model('Team', teamSchema)
