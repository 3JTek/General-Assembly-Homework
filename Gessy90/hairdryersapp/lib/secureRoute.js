const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const User = require('../models/user')

Promise.promisifyAll(jwt)

function secureRoute(req, res, next) {
  if(!req.headers.authorization) res.status(401).json({ message: 'No token available' })

  const token = req.headers.authorization.replace('Bearer ', '')

  jwt
    .verifyAsync(token, process.env.SECRET)
    .then(payload => {
      const now = Math.floor(Date.now() / 1000)
      if(now > payload.exp) throw new Error('The token is expired')
      return User.findById(payload.sub)
    })
    .then(user => {
      if(!user) throw new Error('Incorrect token')
      next()
    })
    .catch(err => res.status(401).json(err.errors))
}

module.exports = secureRoute
