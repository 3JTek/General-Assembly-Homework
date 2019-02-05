const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  leaguename: { type: String, required: true },
  region: { type: String, required: true },
  division: { type: Number, required: true }
})


leagueSchema.virtual('team', {
  ref: 'Team',
  localField: '_id',
  foreignField: 'league'
})

leagueSchema.set('toJSON', {virtuals: true})

module.exports = mongoose.model('League', leagueSchema)
