const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String, required: true}
}, {
  id: false
})

ingredientSchema.set('toJSON', {
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Ingredient', ingredientSchema)
