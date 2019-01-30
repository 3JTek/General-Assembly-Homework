const User = require('../models/user')

function registerRoute(req, res) {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(422).json(err.errors))
}

function loginRoute(req, res) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      res.json({ message: `Welcome back ${user.username}!` })
    })
}




















module.exports = {
  register: registerRoute,
  login: loginRoute
}
