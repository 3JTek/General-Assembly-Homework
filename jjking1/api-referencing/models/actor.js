const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  appearedIn: [{ type: mongoose.Schema.ObjectId, ref: 'Tvshow', required: true}]
 })

 module.exports = mongoose.model('Actor', actorSchema)
