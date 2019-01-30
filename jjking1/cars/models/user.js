const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

// making the data object
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String }
})


// creating a virtual  for passwordconfirmation to compare against the password in
userSchema.virtual('passwordConfirmation')
  .set(function passwordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })


// checking if the virtual password confirmation is same as the password in schema
userSchema.pre('validate', function checkPasswordsMatch(next){
  if(
    this.isModified('password') &&
    this._passwordConfirmation !== this.password
  ) {
    this.invalidate('passwordConfirmation', 'Passwords don\'t match')
  }
  next()
})

// hashing the password before saving it in database
userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()

})

userSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
