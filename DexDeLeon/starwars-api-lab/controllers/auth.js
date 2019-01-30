const User = require('../models/user')
const jwt = require('jsonwebtoken')

function registerRoute(req, res){
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(422).json(err.errors))
}

module.exports = {
  register: registerRoute
}
