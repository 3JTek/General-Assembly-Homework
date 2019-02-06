const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  content: { type: String, required: true, maxlength: 200 }
}, {
  timestamps: true // adds a date create element to the comments object
})

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chef: { type: mongoose.Schema.ObjectId, ref: 'Chef' }, //
  address: { type: String},
  cuisine: { type: String, required: true },
  comments: [ commentSchema ] //calls the comments schema, default an empty array

})

module.exports = mongoose.model('Restaurant', restaurantSchema)
