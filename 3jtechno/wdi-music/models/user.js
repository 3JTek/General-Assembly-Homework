const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})

//Since we don't store the passwordConfirmation, we need to virtually create
//a virtual instance of it for further validation
userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

//Here we make sure password and passwordConfirmation are identical otherwise we
//throw an invalid message
userSchema.pre('validate', function checkPasswordsMatch (next){

  if(this.isModified('password') &&

    this._passwordConfirmation !== this.password) {

    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }
  next()
})

//Hash the password before saving the record into the db (only if password
// changed)
userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }
  next()
})

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
