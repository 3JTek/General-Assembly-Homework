require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const User = require('../models/user')
const BlogPost = require('../models/blogPost')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        user: User.create({
          username: 'SeededUser1',
          email: 'noreply@email.com',
          password: 'SeedPassword',
          passwordConfirmation: 'SeedPassword'
        })
      })
    })
    .then(data => {
      return BlogPost.create({
        author: data.user,
        title: 'Greeking',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        comments: [{ author: data.user, body: 'You are Hitler' }]
      })
    })
    .then(() => console.log('Database Seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
