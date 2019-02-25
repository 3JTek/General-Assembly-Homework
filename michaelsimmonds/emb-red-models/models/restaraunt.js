const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, required: true, maxlength: 250 }
}, {
  timestamps: true
})

const restarauntSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chef: { type: mongoose.Schema.ObjectId, ref: 'Chef', required: true },
  address: { type: String, required: true },
  cuisine: { type: String, required: true },
  comments: [ commentSchema ]
})

module.exports = mongoose.model('Restaraunt', restarauntSchema)
