const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: mongoose.Schema.ObjectId, ref: 'Team', required: true },
  region: { type: String, required: true },
  division: { type: Number, required: true }
})

//
// leagueSchema.virtual('team', {
//   ref: 'Team',
//   localField: '_id',
//   foreignField: 'name'
// })
// 
// leagueSchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('League', leagueSchema)
