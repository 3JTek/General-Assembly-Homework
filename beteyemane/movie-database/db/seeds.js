require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Movie = require('../models/movie')
const Actor = require('../models/actor')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        movie: Movie.create({
          title: 'Inception',
          image: 'https://img1.looper.com/img/gallery/why-we-never-got-to-see-an-inception-sequel/intro.jpg',
          releaseDate: 2010
        })
      })
    })
    .then(data => {
      return Actor.create({
        name: 'Leonardo Di Caprio',
        age: 44,
        movie: data.movie
      })
    })
    .then(data => {
      return Actor.create({
        name: 'Ellen Page',
        age: 31,
        movie: data.movie
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
