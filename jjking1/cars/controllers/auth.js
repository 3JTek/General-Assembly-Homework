const User = require('../models/user')
const jwt = require('jsonwebtoken')

function registerRoute(req, res){
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(422).json(err.errors))
}

function loginRoute(req, res){
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)){
        return res.status(401).json({ message: 'Unauthorized' })
      }

      const payload = { sub: user._id }
    })
}

module.exports = {
  register: registerRoute,
  login: loginRoute
}
