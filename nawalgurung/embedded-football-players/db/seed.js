require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Team = require('../models/team')
const Player = require('../models/division')
const League = require('../models/league')

//run whenever you want to

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        team: Team.create({
          name: 'Barcelona',
          logo: '',
          location: 'Barcelona',
          stadium: 'Camp Nou'
        }),
        player: Player.create({
          name: 'Leiona Messi',
          team: 'Barcelona',
          image: '',
          apperances: '189',
          goals: 20
        })
      })
    })
    .then(data => {
      return League.create({
        name: 'Championship League',
        division: 'Championship',
        team: data.team,
        player: data.player
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
