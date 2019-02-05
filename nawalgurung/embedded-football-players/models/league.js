const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  division: { type: Number},
  team: [{ type: mongoose.Schema.ObjectId, ref: 'Team', required: true }],
  region: { type: String }
})


module.exports = mongoose.model('League', leagueSchema)
