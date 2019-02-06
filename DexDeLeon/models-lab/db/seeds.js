require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Make = require('../models/make')
const Manufacturer = require('../models/manufacturer')
const Variant = require('../models/variant')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Manufacturer.create({
        name: 'Fender',
        location: 'U.S.A.',
        established: '1946',
        logo: 'https://cdn2.bigcommerce.com/server1500/ac84d/products/831/images/1776/Fender_Guitar_-_Logo__36499.1324793549.380.380.jpg?c=2'
      })
    })
    .then(manufacturer => {
      return Make.create({
        name: 'Stratocaster',
        manufacturer: manufacturer,
        created: '1954'
      })
    })
    .then(make => {
      return Variant.create({
        name: 'American Performer',
        make: make,
        manufacturer: make.manufacturer,
        image: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0114920345_gtr_frt_001_rr.jpg',
        body: 'Alder',
        neck: 'Rosewood'
      })
    })
    .then(variant => {
      return Variant.create({
        name: 'Jimi Hendrix',
        make: variant.make,
        manufacturer: variant.manufacturer,
        image: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0145802300_gtr_frt_001_rr.jpg',
        body: 'Alder',
        neck: 'Maple'
      })
    })
    .then(() => console.log('Seeds sewn. 🌱'))
    .catch(err => console.log(err.message))
    .finally(() => mongoose.connection.close())
})
