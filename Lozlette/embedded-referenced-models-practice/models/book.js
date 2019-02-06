const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, required: true, maxlength: 200 }
}, {
  timestamps: true
})

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'Author', required: true },
  image: { type: String, required: true },
  writtenDate: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  comments: [ commentSchema ]
}, {
  id: false
})

module.exports = mongoose.model('Book', bookSchema)
