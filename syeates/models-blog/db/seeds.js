require('dotenv').config()
const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Blog = require('../models/blog')

// console.log(process.env)

mongoose.connect('mongodb://localhost/modelsblog', (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        blog: Blog.create({
          title: 'Snoring Device:Temporary Measures to Avoid Sleepless Nights',
          date: '2018-06-30',
          text: 'Sometimes, the best help we can get are those that do not exceed temporary cures. We may find good use with reforming our anatomy yet many would rather choose the simpler methods than take "unnecessary" risks.',
          image: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj2o7K-_KTgAhWN5KQKHZ7GCIkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.everydayhealth.com%2Fsanjay-gupta%2Fsnoring-is-no-laughing-matter.aspx&psig=AOvVaw0wm92ql-KnAxEaB6JdsUPc&ust=1549469136024141'
        })
      })
    })
    .then(() => {
      return Promise.props({
        blog: Blog.create({
          title: 'Snoring by Nature IsÖ',
          date: '2018-07-30',
          text: 'There is over 300 anti snoring devices invented since the first innovative tennis-ball-in-a-sock which by the way primarily helps prevent patients from sleeping on their backs. Other devices however, initiate unpleasant stimuli everytime a person snores. However, it must be noted that snoring is not subjected to our voluntary faculties. If one device really does stop you from snoring, then it might be credited to the fact that you were kept awake all nightÖwithout one sweet dream.',
          image: 'http://static.nautil.us/14792_1a4a5f89e71e4bb9973355c964a950b4.jpg'
        })
      })
    })
    .then(() => {
      return Promise.props({
        blog: Blog.create({
          title: 'Top Anti Snoring Devices You Can Avail',
          date: '2018-08-30',
          text: 'One of the reasons why people snore is because they have an improper sleeping position. This causes the air passage to stretch and tighten making it more difficult for air to come in and out. To solve this, there are anti snoring pillows that relax your airways and maintain the right sleeping position to prevent a person from snoring throughout the night.',
          image: 'https://hips.hearstapps.com/ame-prod-goodhousekeeping-assets.s3.amazonaws.com/main/embedded/1541/Vf-gh-snoring-220213-de.jpg?crop=1xw:0.5xh;center,top&resize=480:*'
        })
      })
    })
    .then(() => {
      return Promise.props({
        blog: Blog.create({
          title: 'The Easy Way to Stop Snoring',
          date: '2018-09-30',
          text: 'When the sound inside your room during the night can cause your partner or the whole neighborhood to stay awake all night, then you need to take the right action. You need to find ways to stop your snoring problem. However, before you can stop snoring, there is one thing you need to know: the cause of snoring. Here are the ways to stop snoring with respect to its causes.'
        })
      })
    })
    .then(() => {
      return Promise.props({
        blog: Blog.create({
          title: 'Stop Snoring Remedies: From Nasal Sprays to Surgeries',
          date: '2018-10-30',
          text: 'Snoring would have been nothing if all people sleep alone in their solo beds, away from anyone that could hear. But as we all know, most of us have bed partners who are often get annoyed with sleep-disturbing noises.',
          image: 'http://static.nautil.us/14792_1a4a5f89e71e4bb9973355c964a950b4.jpg'
        })
      })
    })
    .then(() => {
      return Promise.props({
        blog: Blog.create({
          title: 'Follow These Tips and Stop Snoring Now!',
          date: '2018-11-30',
          text: 'You have to stop believing that snoring is a sign of a good night sleep. It\'s not! And it will never be. It may be cute in the first few minutes. After a while, it starts to sound as if woodworking is happening in your room in the middle of the night. And this is annoying. But if you have been snoring for days and your whole family cannot sleep, then you have to act now. Try these tips to put an end to their misery.',
          image: 'http://static.nautil.us/14792_1a4a5f89e71e4bb9973355c964a950b4.jpg'
        })
      })
    })
    .then(() => {
      return Promise.props({
        blog: Blog.create({
          title: 'Stop Snoring Device: Temporary Measures to Avoid Sleepless Nights',
          date: '2018-12-30',
          text: 'Sometimes, the best help we can get are those that do not exceed temporary cures. We may find good use with reforming our anatomy yet many would rather choose the simpler methods than take "unnecessary" risks.',
          image: 'http://static.nautil.us/14792_1a4a5f89e71e4bb9973355c964a950b4.jpg'
        })
      })
    })
    .then(() => {
      return Promise.props({
        blog: Blog.create({
          title: 'Stop Snoring: Ways to Treat the Nighttime Dilemma',
          date: '2018-01-30',
          text: 'The most often question raised to any condition is - can it be cured? Well, that actually depends on the nature of the disease, disorder, or syndrome and what knowledge do the medical and scientific communities have with regards to the problem. ',
          image: 'http://static.nautil.us/14792_1a4a5f89e71e4bb9973355c964a950b4.jpg'
        })
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
