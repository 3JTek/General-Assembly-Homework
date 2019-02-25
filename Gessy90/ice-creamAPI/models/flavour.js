const mongoose = require('mongoose')

const flavourSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true}
})



module.exports = mongoose.model('Flavour', flavourSchema)
