require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Player = require('../models/player')
const Team = require('../models/team')
const League = require('../models/league')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Team.create({
        name: 'Manchester United',
        stadium: 'old trafford',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/220px-Manchester_United_FC_crest.svg.png',
        location: 'Manchester',
        established: '1878-06-30'
      })
    })
    .then(data => {
      console.log(data)
      // return Track.create({
      //   title: 'Firestarter',
      //   length: 280,
      //   album: data.album,
      //   artist: data.artist
      // })

    })
    //.then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
