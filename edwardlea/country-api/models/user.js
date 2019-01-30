const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// the schema for the user defined.
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

// Accesses the passwordConfirmation field from the request to set this as a temporary variable for testing laster
userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

// Before userSchema is used validate req data, test is carried out to confirm the password and confirmed passwords match
userSchema.pre('validate', function checkPasswordsMatch(next) {
  if(
    this.isModified('password') && // only runs if the password has been modified, i.e. created, or modified
    this._passwordConfirmation !== this.password
  ) {
    // if the passwords no not match invalidation is forced to through error, prior to validation taking place
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }

  next()
})

// Before data is saved to the database the password included in the request is hashed using bcrypt
userSchema.pre('save', function hashPassword(next) {
  // only hashes the password if the password has been modified
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }

  next()
})

// prototype method added to validate password using the bcrypt compare method, true false returned
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
