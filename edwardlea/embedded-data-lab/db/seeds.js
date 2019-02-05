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
        chef: Chef.create({
          name: 'Bob',
          age: 12,
          from: 'London'
        })
      })
    })
    .then(data => {
      return Restaurant.create({
        name: 'The best Chinese Food',
        chef: data.chef,
        address: '123 High Road',
        cuisine: 'Chinese'
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
