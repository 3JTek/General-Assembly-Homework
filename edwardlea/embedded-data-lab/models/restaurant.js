const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  content: { type: String, required: true, maxlength: 200 }
}, {
  timestamps: true
})

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chef: { type: mongoose.Schema.ObjectId, ref: 'Chef' },
  address: { type: String},
  cuisine: { type: String, required: true },
  comments: [ commentSchema ]

})

module.exports = mongoose.model('Restaurant', restaurantSchema)
