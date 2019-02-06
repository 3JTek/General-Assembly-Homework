require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.promise = Promise

const Team = require('../models/team')
const Skater = require('../models/skater')
const Video = require('../models/video')
const User = require('../models/user')

let u1, s1, s2, t1
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return User.create({
        name: 'Dave',
        username: 'davetheskater',
        email: 'dave@dave.com',
        password: 'password',
        passwordConfirmation: 'password'
      })
    })
    .then(user => {
      u1 = user
      return Team.create({
        name: 'Deathwish',
        image: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/1010845_509911895744186_1724397848_n.png?_nc_cat=109&_nc_ht=scontent-lhr3-1.xx&oh=b2a478369d35bd296f6d7d8d008a3df5&oe=5CE61B3E'
      })
    })
    .then(team => {
      t1 = team
      return Skater.create({
        name: 'Jake Hayes',
        image: 'https://i.ytimg.com/vi/U3t9XyU4Db0/maxresdefault.jpg',
        team: t1._id
      })
    })
    .then(skater => {
      s1 = skater
      return Skater.create({
        name: 'Tom Abbott',
        image: 'https://i.ytimg.com/vi/U3t9XyU4Db0/maxresdefault.jpg',
        team: t1._id
      })
    })
    .then(skater => {
      s2 = skater
      return Video.create({
        title: 'Welcome to DeathWish',
        team: t1._id,
        image: 'http://www.thrashermagazine.com//mediaV2/k2/items/cache/719e762aaad985fa1870404e7de05f64_L.jpg?t=1536779684',
        skaters: [s1._id, s2._id],
        comments: [
          {
            user: u1._id,
            text: 'Yoooooo'
          }
        ]
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err.message))
    .finally(() => mongoose.connection.close())
})
