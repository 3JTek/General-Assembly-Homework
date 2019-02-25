const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, required: true, maxlength: 300 }
}, {
  timestamps: true
})

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true},
  date: { type: Date, required: true},
  text: { type: String, required: true, maxlength: 1000 },
  image: { type: String},
  comments: [ commentSchema ]
})


module.exports = mongoose.model('Blog', blogSchema)
