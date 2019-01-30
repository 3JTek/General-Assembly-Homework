const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmCode: { type: String, required: true },
  verified: { type: Boolean, default: false }
})



module.export = mongoose.model('User', userSchema)
