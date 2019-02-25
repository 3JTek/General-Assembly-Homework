require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Author = require('../models/author')
const User = require('../models/user')
const Book = require('../models/book')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        author: Author.create({
          name: 'Eduardo Mendoza',
          image: 'https://images.gr-assets.com/authors/1249742380p5/37020.jpg'
        }),
        user: User.create({
          username: 'bego',
          email: 'bego@bego.com',
          password: 'bego',
          passwordConfirmation: 'bego'
        })
      })
    })
    .then(data => {
      return Book.create({
        title: 'El misterio de la cripta embrujada',
        image: 'https://images.gr-assets.com/books/1446246070l/112648.jpg',
        author: data.author,
        comments: [{
          user: data.user,
          text: 'bbbbbbb'
        }]
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
