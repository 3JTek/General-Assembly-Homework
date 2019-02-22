const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const User = require('../models/user')

Promise.promisifyAll(jwt)

function secureRoute(req, res, next){
  if(!req.headers.authorization) res.status(401).json('Not Authorised')

  const token = req.headers.authorization.replace('Bearer ', '')

  jwt.verifyAsync(token, process.env.SECRET)
    .then(payload => {
      const now = Math.floor(Date.now()/1000)
      if(now > payload.exp) throw new Error('Token Expiry')

      if(!User.findById(payload.sub)) throw new Error('Invalid token')

      next()
    })
}

module.exports = secureRoute
