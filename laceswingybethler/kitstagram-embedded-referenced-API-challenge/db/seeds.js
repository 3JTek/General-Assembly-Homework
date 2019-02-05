require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const User = require('../models/user')
const Kitten = require('../models/kitten')


mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return User.create({
        username: 'Bill',
        email: 'bill@net.com',
        password: 'billybob',
        passwordConfirmation: 'billybob'
      })
    })
    .then(user => {
      return Kitten.create({
        name: 'Fat Catty',
        breed: 'Tabster',
        age: 3,
        owner: user._id,
        picture: {
          image: 'https://i.pinimg.com/564x/15/76/91/157691566169a091e046c457a5dd8938.jpg',
          comments: {}
        }
      })
    })

    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
