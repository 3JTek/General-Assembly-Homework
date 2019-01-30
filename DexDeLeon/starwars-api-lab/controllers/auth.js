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
        return res.status(401).json({ message: 'Unauthorised' })
      }
      const secret = process.env.SECRET
      const payload = { sub: user._id }
      const token = jwt.sign(payload, secret, { expiresIn: '6h' } )

      res.json({
        token,
        message: `I see you have returned, ${user.username}...`
      })
    })
}

module.exports = {
  register: registerRoute,
  login: loginRoute
}
