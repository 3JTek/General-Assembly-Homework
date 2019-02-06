const mongoose = require('mongoose')

const skaterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  team: { type: mongoose.Schema.ObjectId, ref: 'Team', required: true }
})


module.exports = mongoose.model('Skater', skaterSchema)
