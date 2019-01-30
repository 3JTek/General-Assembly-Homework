const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
})

userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.pre('validate', function checkPasswordsMatch(next){
  if(this.isModified('password') && 'password' !== this.__passwordConfirmation){
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }
  next()
})



module.exports =  mongoose.model('User', userSchema)
