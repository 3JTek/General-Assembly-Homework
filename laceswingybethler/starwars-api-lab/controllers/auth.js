const User = require('../models/user')
const jwt = require('jsonwebtoken')

//Register
function registerRoute(req, res) {
  User
    .create(req.body)
    .then(() => res.status(201).json({ message: 'Registered' }))
    .catch(err => res.status(422).json(err.errors))
}

//Login
function loginRoute(req, res) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Not allowed!'})
      }
      const payload = { sub: user._id }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '6h' })

      res.json({
        token,
        message: `Welcome back ${user.username}!`
      })
    })
}


module.exports = {
  register: registerRoute,
  login: loginRoute
}
