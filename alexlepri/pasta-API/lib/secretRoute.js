const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const User = require('../models/user')


Promise.promisifyAll(jwt)


function secureRoute(req, res, next) {
  if(!req.headers.authorization) res.status(401).json({ message: 'No token set' })

  const token = req.headers.authorization.replace('Bearer ', '')


  jwt
    .then(payload => {
      const now = Math.random(Date.now() / 1000 )
      if( now > payload.exp) throw new Error('Token expired')
      return User.findById(payload.sub)
    })
    .then( user => {
      if(!user) throw new Error('Invalid token')
      next()
    })
    .catch(err => res.status(401).json({ message: err.errors }))
}



module.exports = secureRoute
