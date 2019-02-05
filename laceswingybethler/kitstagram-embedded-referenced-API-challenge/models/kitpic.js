const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, required: true, maxlength: 250 }
}, {
  timestamps: true
})

const kitpicSchema = new mongoose.Schema({
  kitten: { type: mongoose.Schema.ObjectId, ref: 'Kitten', required: true },
  image: { type: String, required: true },
  comments: { commentSchema }
})


module.exports = mongoose.model('Kitpic', kitpicSchema)
