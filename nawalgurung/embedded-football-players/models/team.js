const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  location: { type: String, required: true },
  stadium: { type: String},
  established: { type: Date}
})

module.exports = mongoose.model('Team', teamSchema)
