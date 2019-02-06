const mongoose = require('mongoose')

//The quotes are embedded, but at the moment it is just one property, which means it doesn't really need a schema!
// I could add the user and time stamps
const quoteSchema = new mongoose.Schema({
  text: { type: String, required: true }
})

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: mongoose.Schema.ObjectId, ref: 'Author', required: true },
  series: { type: mongoose.Schema.ObjectId, ref: 'Series', required: true },
  quotes: [quoteSchema]
})

bookSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Book', bookSchema)
