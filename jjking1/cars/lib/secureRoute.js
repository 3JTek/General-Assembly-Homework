const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const User = require('../models/user')

// adding promises to avoid using callbacks
Promise.promisifyAll(jwt)


function secureRoute(req, res, next){
  // if there is no token, return 404
  if(!req.headers.authorization) res.status(401).json({ message: 'Unauthorized' })

  const token = req.headers.authorization.replace('Bearer ', '')

// beginning promise chain with verifyasync
  jwt.verifyAsync(token, process.env.SECRET)
    .then(payload => {
      // check if payload has expired by comparing date now vs expiring
      const now = Math.floor(Date.now() / 1000)
      if(now > payload.exp) throw new Error('expired')
      // find the user corresponding to payload
      return User.findById(payload.sub)
    })
    .then(user => {
      // if user exists move on to next piece of middleware- the createRoute
      if(!user) throw new Error('user not existing')
      next()
    })
    .catch((err) => res.status(401).json({ message: err.message }))

}



module.exports = secureRoute
