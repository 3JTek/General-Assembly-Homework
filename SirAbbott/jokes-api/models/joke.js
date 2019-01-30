const mongoose = require('mongoose')

const jokeSchema = new mongoose.Schema({
  comedian: { type: String, required: true },
  joke: { type: String, required: true },
  yearTold: { type: Number },
  image: { type: String, required: true }
})

module.exports = mongoose.model('Joke', jokeSchema)
