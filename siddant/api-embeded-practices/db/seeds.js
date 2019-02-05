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
      return League.create({
        leaguename: 'premier league',
        region: 'England',
        division: 1
      })
    })
    .then(data => {
      return Promise.props({
        team1: Team.create({
          name: 'Manchester United',
          stadium: 'old trafford',
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/220px-Manchester_United_FC_crest.svg.png',
          location: 'Manchester, England',
          established: '1878',
          league: data
        }),
        team2: Team.create({
          name: 'Manchester City',
          stadium: 'Etihad Stadium',
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png',
          location: 'Manchester, England',
          established: '1880',
          league: data
        }),
        team3: Team.create({
          name: 'Arsenal',
          stadium: 'Emirates Stadium',
          image: 'http://graphichive.net/uploaded/youtoart/b_1252034806189.jpg',
          location: 'Islington, London, England',
          established: '1886',
          league: data
        })
      })
    })
    .then(data => {
      return Player.create({
        name: 'Paul pogba',
        goals: 90,
        appearance: 250,
        image: 'https://www.foxsportsasia.com/uploads/2018/12/pogba-.jpg',
        team: data.team1
      })
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
