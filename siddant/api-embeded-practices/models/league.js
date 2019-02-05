const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: [{ type: mongoose.Schema.ObjectId, ref: 'Team', required: true }],
  region: { type: String, required: true },
  division: { type: Number, required: true }
})


module.exports = mongoose.model('League', leagueSchema)
