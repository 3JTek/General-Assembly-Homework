const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }

})

authorSchema.virtual('series', {
  ref: 'Series',
  localField: '_id',
  foreignField: 'author'
})

authorSchema.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'author'
})

// authorSchema.virtual('singles', {
//   ref: 'Track',
//   localField: '_id',
//   foreignField: 'author'
// })

authorSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    console.log('pre JSON',json)
    if(json.series){
      json.series = json.series.map((ser)=>{
        delete ser.books
        delete ser.author
        delete ser.id
        return ser
      })
    }
    if(json.books){
      json.books = json.books.map((book)=>{
        delete book.quotes
        delete book.author
        delete book.id
        delete book.series.books
        delete book.series.id
        return book
      })
    }
    console.log('post JSON',json)
    delete json.__v
    delete json.id
    return json
  }
})

module.exports = mongoose.model('Author', authorSchema)
