require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.promise = Promise

const Team = require('../models/team')
const Skater = require('../models/skater')
const Video = require('../models/video')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Team.create({
        name: 'Deathwish',
        image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/1010845_509911895744186_1724397848_n.png?_nc_cat=109&_nc_ht=scontent-lhr3-1.xx&oh=b2a478369d35bd296f6d7d8d008a3df5&oe=5CE61B3E'
      })
    })
    .then(team => {
      return Promise.props({
        skater: Skater.create({
          name: 'Jake Hayes',
          image: 'https://i.ytimg.com/vi/U3t9XyU4Db0/maxresdefault.jpg',
          team: team
        }),
        video: Video.create({
          title: 'Welcome to DeathWish',
          team: team,
          image: 'http://www.thrashermagazine.com//mediaV2/k2/items/cache/719e762aaad985fa1870404e7de05f64_L.jpg?t=1536779684'
        })
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err.message))
    .finally(() => mongoose.connection.closed())
})
