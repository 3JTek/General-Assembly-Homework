const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const User = require('../models/user')

Promise.promisifyAll(jwt)

function secureRoute(req, res, next){

  //If not Authorization field in header, return error
  if(!req.headers.authorization) return  res.status(401).json({ message: 'No token set' })

  //Strip Authroization value of Bearer and space
  const token = req.headers.authorization.replace('Bearer ','')

  //Check web token
  jwt
  //Decrypt token with secret
    .verifyAsync( token, process.env.SECRET)
    //Check if the token has expired

    .then( payload => {
      const now = Math.floor(Date.now()/1000)
      if( now > payload.exp ) throw new Error('Token expired')
      //If valid return user
      return User.findById(payload.sub)
    })

    .then( user => {
      //If no user throw error
      if(!user) throw new Error( 'Invalid token' )
      next()
    })

    //If errors return error status and messages
    .catch( err => res.status(401).json({ message: err.message }) )
}

module.exports = secureRoute
