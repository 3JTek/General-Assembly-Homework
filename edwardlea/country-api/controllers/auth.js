const User = require('../models/user')
const jwt = require('jsonwebtoken')

// register route
function registerRoute (req, res){
  User.create(req.body)
    .then(() => res.status(201).json({ message: 'User Registered' }))
    .catch(err => res.status(422).json(err))
}


// login route
function loginRoute (req, res){
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Not Authorised' })
      }
      const payload = { sub: user._id }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '6h' })

      res.json({
        token,
        message: `${user.username}, you're signed in!`
      })
    })
}


module.exports = {
  register: registerRoute,
  login: loginRoute


}
