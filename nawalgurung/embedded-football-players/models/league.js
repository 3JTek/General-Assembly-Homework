const mongoose = require('mongoose')

const leagueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  division: { type: String},
  team: { type: mongoose.Schema.ObjectId, ref: 'Team', required: true }
})


module.exports = mongoose.model('League', leagueSchema)
