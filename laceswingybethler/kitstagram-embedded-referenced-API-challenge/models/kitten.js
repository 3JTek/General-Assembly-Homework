const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  text: { type: String, maxlength: 250 }
}, {
  timestamps: true
})


const pictureSchema = new mongoose.Schema({
  image: { type: String, required: true },
  comments: [ commentSchema ]
})

const kittenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: {type: String, required: true },
  age: { type: Number },
  //owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  picture: [ pictureSchema ]
})

module.exports = mongoose.model('Kitten', kittenSchema)
