const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, required: true, maxlength: 250 }
}, {
  timestamps: true
})


const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: mongoose.Schema.ObjectId, ref: 'Team', required: true },
  goals: { type: Number, required: true },
  appearance: { type: Number, required: true },
  image: { type: String, required: true },
  comments: [commentSchema]
})

module.exports = mongoose.model('Player', playerSchema)
