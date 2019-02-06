require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Cocktail = require('../models/cocktail')
const Alcohol = require('../models/alcohol')
const Ingredient = require('../models/ingredient')
const User = require('../models/user')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        alcohol: Alcohol.create({
          name: 'Vodka',
          alcoholPerCent: '40'
        }),
        ingredient: Ingredient.create({
          name: 'Pepper',
          type: 'Spice'
        })
      })
    })
    .then(data => {
      return Cocktail.create({
        name: 'Bloody Mary',
        origin: 'New York',
        alcohols: data.alcohol,
        ingredients: data.ingredient
      })
    })
    .then(() => {
      return User.create({
        username: '3j',
        email: '3j@gmail.com',
        password: 'wdi',
        passwordConfirmation: 'wdi'
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
