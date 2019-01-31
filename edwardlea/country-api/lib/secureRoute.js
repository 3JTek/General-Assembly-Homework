const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const User = require('../models/user')

// adds promised to all jwt functionality
Promise.promisifyAll(jwt)

// secure route to confirm user is logged in
function secureRoute (req, res, next){
  // Checks if request has been submitted with authorization header
  if(!req.headers.authorization) return res.status(401).json({ message: 'Token not provided'})

  //  abstracts token from authorization header
  const token = req.headers.authorization.replace('Bearer ', '')

  // using the jwt verifyAsync method to check submitted token using the secret
  jwt.verifyAsync(token, process.env.SECRET)
    // takes the payload from the jwt verification, sub, exp, etc.
    .then(payload => {
      // find time now is seconds
      const now = Math.floor(Date.now() / 1000)
      // checks if the token has still valid, i.e. is greater than the current time. If so throw an error
      if(now > payload.exp) throw new Error('Token Expired')
      // uses the User collection to find the user by the id, same as the sub from the payload
      return User.findById(payload.sub)
    })
    .then(user => {
      // if no user found error throw
      if(!user) throw new Error('Invalid token')
      next()
    })
    // catches and handles all errors from the promises
    .catch(err => res.status(401).json({ message: err.message }))
}

// exports secureRoute function to be used in the routes file
module.exports = secureRoute
