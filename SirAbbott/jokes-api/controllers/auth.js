const User = require('../models/user')


function registerRoute(req, res) {
  User
    .create(req.body)
    .then(() => res.status(201).json({ message: 'Registered' }))
    .catch(err => res.status(422).json(err.errors))
}



module.exports = {
  register: registerRoute
}
