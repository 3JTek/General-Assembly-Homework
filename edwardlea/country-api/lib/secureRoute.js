const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const User = require('../models/user')

Promise.promisifyAll(jwt)

// secure route
function secureRoute (req, res, next){
  if(!req.header.token) return res.status(401).json({ message: 'Token not provided'})

  const token = req.headers.authorization.replace('Bearer ', '')

  jwt.verifyAsync(token, process.env.SECRET)
    .then(payload => {
      const now = Math.floor(Date.now() / 1000)
      if(now > payload.exp) throw new Error('Token Expired')
      return User.findById(payload.sub)
    })
    .then(user => {
      if(!user) throw new Error('Invalid token')
      next()
    })
    .catch(err => res.status(401).json({ message: err.message }))
}

module.exports = secureRoute
