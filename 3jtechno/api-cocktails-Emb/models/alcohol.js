const mongoose = require('mongoose')

const alcoholSchema = new mongoose.Schema({
  name: {type: String, required: true},
  alcoholPerCent: {type: Number, required: true}
}, {
  id: false
})

alcoholSchema.set('toJSON', {
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Alcohol', alcoholSchema)
