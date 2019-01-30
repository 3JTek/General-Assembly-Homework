const User = require('../models/user')

function registerUser (req, res) {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(422).json(err.message))
}

function loginUser(req, res){
  // User.findOne({email: req.body.email, password: req.body.password})
}




module.exports = {
  register: registerUser,
  login: loginUser
}
