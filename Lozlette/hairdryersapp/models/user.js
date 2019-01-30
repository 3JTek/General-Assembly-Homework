const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//schema with fields needed in order to register/login and whether they are required or not
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

//virtual password confirmation- we have access to it but it is not stored in the database
userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

//function to check whether password in virtual matches the plain text password. This is done in pre validate function so that virtual doesn't have to go in the schema.
userSchema.pre('validate', function checkPasswordsMatch(next) {
  if(
    this.isModified('password') &&
    this._passwordConfirmation !== this.password
  ) {
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }

  next()
})

//function to hash the password and add salt to encrypt it with bcrypt.
userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }

  next()
})












module.exports = mongoose.model('User', userSchema)
