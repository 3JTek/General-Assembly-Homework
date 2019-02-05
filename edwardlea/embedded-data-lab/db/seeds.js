require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Chef = require('../models/chef')
const Restaurant = require('../models/restaurant')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase() //removes all data from database
    .then(() => {
      return Promise.props({ //.props are used when adding objects to the database
        chef1: Chef.create({
          name: 'Bob',
          age: 26,
          from: 'London'
        }),
        chef2: Chef.create({
          name: 'James',
          age: 45,
          from: 'Manchester'
        })
      })
    })
    .then(data => {
      return Promise.props({
        restaurant1: Restaurant.create({
          name: 'The best Chinese Food',
          chef: data.chef1,
          address: '123 High Road',
          cuisine: 'Chinese'
        }),
        restaurant2: Restaurant.create({
          name: 'The best English Food',
          chef: data.chef2,
          address: '123 Low Road',
          cuisine: 'English'
        })
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
