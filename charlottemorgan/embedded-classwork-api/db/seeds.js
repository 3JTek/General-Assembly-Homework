require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Manufacturer = require('../models/manufacturer')
const Make = require('../models/make')
const Guitar = require('../models/guitar')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Manufacturer.create({
        name: 'Fender',
        location: 'USA',
        established: '1946',
        logo: 'https://seeklogo.com/images/F/Fender-logo-1FDA71BA74-seeklogo.com.png'
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
      return Guitar.create({
        name: 'American Performer',
        make: make,
        manufacturer: make.manufacturer,
        image: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0114920345_gtr_frt_001_rr.jpg'
      })
    })
    .then(guitar => {
      return Guitar.create({
        name: 'Jimi Hendrix',
        make: guitar.make,
        manufacturer: guitar.manufacturer,
        image: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0145802300_gtr_frt_001_rr.jpg'
      })
    })
    .then(() => console.log('Seeds Sewn 🤓'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
