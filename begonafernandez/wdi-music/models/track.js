const mongoose = require('mongoose')

const trackSchema = new mongoose.Schema({
  title: {type: String, required: true},
  artist: {type: String, required: true},
  duration: {type: Number},
  genre: {type: String}
})


module.exports = mongoose.model('track', trackSchema)
