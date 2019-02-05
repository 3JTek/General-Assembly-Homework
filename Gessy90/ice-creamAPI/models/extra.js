const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.ObjectId, ref: 'User' },
  text: {type: String, required: true, maxlenght: 50}
},{
  timestamps: true
})


const extraSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: {type: String},
  comments: [commentSchema]
})

module.exports = mongoose.model('Extra', extraSchema)
