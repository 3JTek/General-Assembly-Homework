const User = require('../model/user')

function registerUser(req, res) {
  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(422).json(err.errors))

}

module.exports = {
  register: registerUser
}
