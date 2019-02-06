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

leagueSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    delete json.id
    return json
  }
})

module.exports = mongoose.model('League', leagueSchema)
