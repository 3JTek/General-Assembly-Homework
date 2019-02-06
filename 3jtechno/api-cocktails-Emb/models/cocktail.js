const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  text: {type: String, required: true, maxLength: 256}
},{
  timepstamps: true
})

const cocktailSchema = new mongoose.Schema({
  name: {type: String, required: true},
  origin: {type: String, required: true},
  alcohols: { type: mongoose.Schema.ObjectId, ref: 'Alcohol', required: true },
  ingredients: { type: mongoose.Schema.ObjectId, ref: 'Ingredient', required: true },
  comments: [ commentSchema ]
}, {
  id: false
})

cocktailSchema.set('toJSON', {
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Cocktail', cocktailSchema)
