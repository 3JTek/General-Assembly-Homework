const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  body: { type: String, required: true},
  author: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentSchema ]
}, {
  timestamps: true
})

module.exports = mongoose.model('blogPost', blogPostSchema)
