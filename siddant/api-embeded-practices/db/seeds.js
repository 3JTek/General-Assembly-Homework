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
      return Promise.props({
        player1: Player.create({
          name: 'Paul pogba',
          goals: 90,
          appearance: 250,
          image: 'https://www.foxsportsasia.com/uploads/2018/12/pogba-.jpg',
          team: data.team1
        }),
        player2: Player.create({
          name: 'Sergio Agüero',
          goals: 157,
          appearance: 227,
          image: 'https://e2.365dm.com/18/03/768x432/skysports-sergio-aguero-man-city_4265275.jpg?20180326085532',
          team: data.team2
        }),
        player3: Player.create({
          name: 'Alexis Sánchez',
          goals: 63,
          appearance: 147,
          image: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/07/16/20/alexissanchez1607a.jpg?w968',
          team: data.team1
        }),
        player4: Player.create({
          name: 'Marcus Rashford',
          goals: 26,
          appearance: 100,
          image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/02/03/17/Marcus-Rashford.jpg',
          team: data.team1
        }),
        player5: Player.create({
          name: 'Jesse Lingard',
          goals: 17,
          appearance: 105,
          image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/05/21/lingard.jpg',
          team: data.team1
        })
      })
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
