const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

userSchema.virtual('passwordConfirmation')
  .set(function passwordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.pre('validate', function checkPasswordMatch(next) {
  if(
    this.isModified('password') && // if this is false (i.e. not modifed) it will go straight to error at bottom of func
    this._passwordConfirmation !== this.password
  ) {
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }
  next()
})

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8)) //takes the password and encrypts it
  }
  next()
})

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password) //checks if encrypted password is same as one given.
}

module.exports = mongoose.model('User', userSchema)
