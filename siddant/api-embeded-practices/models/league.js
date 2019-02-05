const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  leaguename: { type: String, required: true },
  region: { type: String, required: true },
  division: { type: Number, required: true },
  team: [{ type: mongoose.Schema.ObjectId, ref: 'Team', required: true }]
})

leagueSchema.set('toJSON', {virtuals: true})


module.exports = mongoose.model('League', leagueSchema)
