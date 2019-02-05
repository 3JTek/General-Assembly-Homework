const mongoose = require('mongoose')

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
    // delete json.id
    // delete json.series.books
    // delete json.series.id
    // delete json.author.books
    // delete json.author.series
    // delete json.author.id
    return json
  }
})

module.exports = mongoose.model('Book', bookSchema)
