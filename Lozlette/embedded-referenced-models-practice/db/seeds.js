require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Book = require('../models/book')
const Author = require('../models/author')


mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()

    .then(() => {
      return Promise.props({
        author: Author.create({
          name: 'George Orwell',
          image: 'https://i.guim.co.uk/img/static/sys-images/Observer/Pix/pictures/2009/5/9/1241876037386/George-Orwell-001.jpg?width=300&quality=85&auto=format&fit=max&s=5457e083d735b5c2cab896c7945b7b50'
        })
      })
    })
    .then(data => {
      return Book.create({
        title: '1984',
        author: data.author,
        image: 'https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg',
        writtenDate: '1949',
        genre: 'Science Fiction',
        description: 'Nineteen Eighty-Four, often published as 1984, is a dystopian novel by English writer George Orwell published in June 1949. The novel is set in the year 1984 when most of the world population have become victims of perpetual war, omnipresent government surveillance and propaganda.'
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
