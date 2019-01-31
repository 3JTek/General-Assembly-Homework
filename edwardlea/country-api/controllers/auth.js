const User = require('../models/user')
const jwt = require('jsonwebtoken')

// register route to handle new user registations
function registerRoute (req, res){
  // creates new user instance using the bosy of the request
  User.create(req.body)
  // returns message to client
    .then(() => res.status(201).json({ message: 'User Registered' }))
    .catch(err => res.status(422).json(err))
}


// login route accesed when the user attempts to login
function loginRoute (req, res){
  User
    //finds the user based on the request body email
    .findOne({ email: req.body.email })
    .then(user => {
      // users the returned user infomration to confirm, a a user existing and b the password is valid.
      if(!user || !user.validatePassword(req.body.password)) {
        // throw error if not passed
        return res.status(401).json({ message: 'Not Authorised' })
      }
      // set the payload based on the found user's id for use with the jwt method
      const payload = { sub: user._id }
      // uses the jwt method, payload secret and expiration period to generate token
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '8h' })

      // Once log in successful returns the token and a message to the client
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
