const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
}, {
  id: false
})

teamSchema.virtual('skaters', {
  ref: 'Skater',
  localField: '_id',
  foreignField: 'team'
})

teamSchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Team', teamSchema)
