const User = require('../models/user')
const jwt = require('jsonwebtoken')


function registerRoute(req, res) {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(422).json(err.errors))
}

function loginRoute(req, res) {
  User.findOne({ email: req.body.email, verified: true })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Not autohrized' })
      }

      const payload = { sub: user._id }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '3h' })

      res.json({ token, message: `Welcome back ${user.username}!`
      })
    })
}

function confirmRoute(req, res) {
  User.findOne({ confirmCode: req.params.code })
    .then(user => {
      if(!user) return res.status(401).json({ message: 'Not authorized'})

      user.verified = true
      return user.save()

    })
    .then(() => res.json({ message: 'Account verified' }))
    .catch(err => console.log(err))
}

module.exports = {
  register: registerRoute,
  login: loginRoute,
  confirm: confirmRoute
}
