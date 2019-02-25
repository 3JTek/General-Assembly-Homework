const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, required: true, maxlength: 250 }
}, {
  timestamps: true
})

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  comments: [commentSchema]
},{
  id: false
})

movieSchema.virtual('cast', {
  ref: 'Actor',
  localField: '_id',
  foreignField: 'movie'
})


movieSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    return json
  }
})

module.exports = mongoose.model('Movie', movieSchema)
