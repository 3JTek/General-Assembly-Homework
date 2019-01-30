const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const User = require('../models/user')

Promise.promisifyAll(jwt)

//if there is no authorization header return message of unauthorized.req.headers.authorization will be a string
//we then get the token from the header and store in a variable, we are replacing the word bearer and the space with an empty string so we can just get the acutal token itself

//step one check if theres a token
//step two check if you are a verified user
//step three if you are verified send you onto the next route which is create
//secret is used to encode and decode the token
function secureRoute(req, res, next) {
  if(!req.headers.authorization) res.status(401).json({ message: 'No token set'})

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
