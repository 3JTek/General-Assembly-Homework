const User = require('../model/user')
const jwt = require('jsonwebtoken')

function registerUser(req, res) {
  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(422).json(err.errors))
}


function loginUser(req, res) {
  User
    .findOne({email: req.body.email})
    .then(user => {
      console.log(!user.validatePassword(req.body.password))
      if(!user || !user.validatePassword(req.body.password)){
        return res.status(401).json({message: 'unauthorized!!'})
      }
      const payload = { sub: user._id }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '6h' })

      res.json({
        token,
        message: `Welcome back ${user.username}!`
      })
      
    })
    .catch(err => res.status(422).json(err.errors))
}

module.exports = {
  register: registerUser,
  login: loginUser
}
