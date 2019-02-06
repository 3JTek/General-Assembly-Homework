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
  image: { type: String, required: true },
  appearance: { type: Number },
  goals: { type: Number },
  comments: [ commentSchema ]
})



module.exports = mongoose.model('Player', playerSchema)
