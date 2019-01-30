const jwt = require('jsonwebtoken')
const User = require('../models/user')

function registerUser (req, res) {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(422).json(err.message))
}

function loginUser(req, res){
  User.findOne({email: req.body.email})
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)){
        res.status(401).json('Not Authenticated')
      } else {
        const payload = {sub: user._id}
        const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '6h'})
        res.json({
          token,
          message: `Welcome back ${user.username}`
        })
      }
    })
}

module.exports = {
  register: registerUser,
  login: loginUser
}
