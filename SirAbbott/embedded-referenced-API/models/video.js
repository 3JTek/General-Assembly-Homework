const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, required: true, maxlength: 250 }
}, {
  timestamps: true
})


const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  team: { type: mongoose.Schema.ObjectId, ref: 'Team', required: true },
  image: { type: String },
  skaters: [{ type: mongoose.Schema.ObjectId, ref: 'Skater' }],
  comments: [ commentSchema ]
})

module.exports = mongoose.model('Video', videoSchema)
