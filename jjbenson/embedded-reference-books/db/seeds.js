require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const User = require('../models/user')
const Author = require('../models/author')
const Series = require('../models/series')
const Book = require('../models/book')


mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    // .then( ()=> {
    //   return User.create({
    //     username: 'BB',
    //     email: 'bb@b.com',
    //     password: 'pass',
    //     passwordConfirmation: 'pass'
    //   })
    // })
    .then( ()=> {
      return Author.create({
        name: 'Iain M. Banks',
        image: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/IainMBanks.jpg'
      })
    })
    .then( (author)=> {
      return Series.create({
        name: 'Culture',
        genre: 'Science Fiction',
        author: author
      })
    })
    .then( (series)=>{
      return Book.create({
        title: 'Consider Phlebas',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51uT5CeSI3L._SX316_BO1,204,203,200_.jpg',
        author: series.author,
        series: series
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
