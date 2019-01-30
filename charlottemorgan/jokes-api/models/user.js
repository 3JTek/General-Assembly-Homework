const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

//this virtual is information this is not stored in the database but can be accessed. Receiving data with .set method. Creating a variable on the user data called _passwordConfirmation. Have to store on this because of scoping issue of it only being avaiable inside the function
userSchema.virtual('passwordConfirmation')
  .set(function setPasswordsConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

//here we are checking if the password matches the password confirmation only if the password field is updated. If returns false then invalidate and show message. Checking to invalidate not to validate. pre validation takes place before the full validation of all the user data when it checks if the user can be added to the database. Next() takes us to the next step which is validation
userSchema.pre('validate', function checkPasswordsMatch(next) {
  if(
    this.isModified('password') &&
   this._passwordConfirmation !== this.password
  ) {
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }
  next()
})

//this is the pre-save step. the next() above tells it to move to the validation step which we dont see as this is done by mongoose but is hidden. Here if it passes the pre validation for th password then validation is run by mongoose, then we move to pre-save where the password is hashed. higher the number of salt, the more secure the password hash is.
userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }
  next()
})

//methods is similar to a prototype
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}



module.exports = mongoose.model('User', userSchema)
