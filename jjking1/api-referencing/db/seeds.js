require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Tvshow = require('../models/tvshow')
const Actor = require('../models/actor')
mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        tvshow: Tvshow.create({
          title: 'Lost',
          image: 'https://vignette.wikia.nocookie.net/lostpedia/images/1/16/Lost-season1.jpg/revision/latest?cb=20070303221754',
          numberOfSeasons: 6
        }),
        tvshow2: Tvshow.create({
          title: 'Party of Five',
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Party_of_Five_title_card.png/250px-Party_of_Five_title_card.png',
          numberOfSeasons: 6
        })
      })
    })
    .then(data => {
      return Promise.props({
        actor1: Actor.create({
            name: 'Matthew Fox',
            dob: '1966-07-14',
            appearedIn: [data.tvshow, data.tvshow2]
          }),
        actor2: Actor.create({
            name: 'Evangeline Lily',
            dob: '1979-08-03',
            appearedIn: [data.tvshow]
          })
      })

  })
  .then(() => console.log('Database successfully seeded'))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close())
})
