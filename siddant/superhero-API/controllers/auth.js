const User = require('../model/user')

function registerUser(req, res) {
  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(422).json(err.errors))
}


function loginUser(req, res) {
  User
    .findOne({email: req.body.email})
    .then(user => {
      console.log(!user.validatePassword(req.body.password))
      if(!user || !user.validatePassword(req.body.password)){
        return res.status(401).json({message: 'unauthorized!!'})
      }
      return res.status(200).json({message: `welcome back ${user.username}!!`})

    })
    .catch(err => res.status(422).json(err.errors))
}

module.exports = {
  register: registerUser,
  login: loginUser
}
