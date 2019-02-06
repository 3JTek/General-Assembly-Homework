require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.promise = Promise

const Chef = require('../models/chef')
const Restaraunt = require('../models/restaraunt')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        chef: Chef.create({
          name: 'Jamie Oliver',
          age: 43,
          from: 'England'
        })
      })
    })
    .then((data) => {
      return Restaraunt.create({
        name: 'Jamie\'s Italian',
        chef: data.chef,
        address: '123 High Street',
        cuisine: 'Italian'
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
