const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, required: true, maxlength: 250 }
}, {
  timestamps: true
})

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'Author', required: true },
  image: { type: String, required: true },
  comments: [ commentSchema ]
})

bookSchema.set('toJSON', {
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Book', bookSchema)
