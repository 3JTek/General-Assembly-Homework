const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  location: { type: String, required: true },
  stadium: { type: String},
  established: { type: Date}
})


teamSchema.virtual('players', {
  ref: 'Player',
  localField: '_id',
  foreignField: 'team'
})

teamSchema.set('toJSON', { virtuals: true })


module.exports = mongoose.model('Team', teamSchema)
