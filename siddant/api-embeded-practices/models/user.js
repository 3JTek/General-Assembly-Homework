const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: mongoose.Schema.ObjectId, ref: 'Team', required: true },
  password: { type: Number, required: true },
  email: { type: String, required: true }
})


module.exports = mongoose.model('User', userSchema)
