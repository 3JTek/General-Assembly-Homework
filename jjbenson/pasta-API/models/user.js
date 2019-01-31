const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//Create model for User records
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

//Create virtual for passwordConfirmation field
userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

// Before validation, create and run a function that checks the password and passwordConfirmation match
userSchema.pre('validate', function checkPasswordsMatch(next){
  if(
    //If password has changed
    this.isModified('password') &&
    this._passwordConfirmation !== this.password
  ){
    //If passwords dont match, invalidate
    this.invalidate('passwordConfirmation','Passwords do not match')
  }
  next()
})

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }
  next()
})

//Add the validatePassword method prototype
userSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
