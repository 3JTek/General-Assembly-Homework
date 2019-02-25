const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, required: true, maxlength: 250 }
  }, {
  timestamps: true
})

const tvshowSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  numberOfSeasons: { type: Number, required: true },
  comments: [ commentSchema ]
 })

 tvshowSchema.virtual('cast', {
   ref: 'Actor',
   localField: '_id',
   foreignField: 'appearedIn'
 })

 tvshowSchema.set('toJSON', { virtuals: true })

 module.exports = mongoose.model('Tvshow', tvshowSchema)
