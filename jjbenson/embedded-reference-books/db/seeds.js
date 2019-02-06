require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

// const User = require('../models/user')
const Author = require('../models/author')
const Series = require('../models/series')
const Book = require('../models/book')

// const authArr = [
//   {
//     name: 'Iain M. Banks',
//     image: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/IainMBanks.jpg',
//     series: [
//       {
//         name: 'Culture',
//         genre: 'Science Fiction',
//         author: '',
//         books: [
//           {
//             title: 'Consider Phlebas',
//             image: 'https://images-na.ssl-images-amazon.com/images/I/51uT5CeSI3L._SX316_BO1,204,203,200_.jpg',
//             author: '',
//             series: ''
//           }
//         ]
//       }
//     ]
//   },
//   {
//     name: 'Terry Pratchett',
//     image: 'http://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/uploads/sites/4/2017/04/sirterry-1.jpg',
//     series: [
//       {
//         name: 'Disc World',
//         genre: 'Fantasy',
//         author: '',
//         books: [
//           {
//             title: 'The Colour Of Magic',
//             image: 'https://images-na.ssl-images-amazon.com/images/I/517UdroKvTL._SX319_BO1,204,203,200_.jpg',
//             author: '',
//             series: ''
//           }
//         ]
//       }
//     ]
//   }
// ]


mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  db.dropDatabase()

  // .then( () => {
  //   return Promise.props({
  //     artist: Author.create({
  //       name: 'Prodigy',
  //       image: 'https://i.ebayimg.com/images/g/LtAAAOSwEEBaNocc/s-l1600.jpg'
  //     }),
  //     album: Album.create({
  //       title: 'Fat of the Land',
  //       genre: 'Electronica',
  //       image: 'https://upload.wikimedia.org/wikipedia/en/3/3b/TheProdigy-TheFatOfTheLand.jpg',
  //       releaseDate: '1997-06-30'
  //     })
  //   })
  // })

    // .then( ()=> {
    //   return User.create({
    //     username: 'BB',
    //     email: 'bb@b.com',
    //     password: 'pass',
    //     passwordConfirmation: 'pass'
    //   })
    // })
    //
    .then( ()=> {
      return Author.create({
        name: 'Iain M. Banks',
        image: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/IainMBanks.jpg'
      })
    })
    .then( (author)=> {
      return Series.create({
        name: 'Culture',
        genre: 'Science Fiction',
        author: author
      })
    })
    .then( (series)=>{
      return Book.create({
        title: 'Consider Phlebas',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51uT5CeSI3L._SX316_BO1,204,203,200_.jpg',
        author: series.author,
        series: series,
        quotes: [
          {text: 'Experience as well as common sense indicated that the most reliable method of avoiding self-extinction was not to equip oneself with the means to accomplish it in the first place'},
          {text: 'I had nightmares I thought were really horrible until I woke up and remembered what reality was at the moment.'},
          {text: 'Empathize with stupidity and you’re halfway to thinking like an idiot'}
        ]
      })
        .then(()=>{
          return Book.create({
            title: 'The Player of Games',
            image: 'https://upload.wikimedia.org/wikipedia/en/6/65/ThePlayerOfGames.jpg',
            author: series.author,
            series: series,
            quotes: [{
              text: 'My gratitude extends beyond the limits of my capacity to express it,'
            },{
              text: 'Escape is a commodity like anything else'
            },{
              text: 'By being unknowable, by resulting from events which, at the sub-atomic level, cannot be fully predicted, the future remains malleable, and retains the possibility of change, the hope of coming to prevail; victory, to use an unfashionable word. In this, the future is a game; time is one of the rules.'
            }]
          })
        })
        .then(()=>{
          return Book.create({
            title: 'Use of Weapons',
            image: 'https://upload.wikimedia.org/wikipedia/en/e/ef/IainMBanksUseofWeapons.jpg',
            author: series.author,
            series: series,
            quotes: [{
              text: 'I just think people overvalue argument because they like to hear themselves talk.'
            },{
              text: 'There has seldom if ever a shortage of eager young males prepared to kill and die to preserve the security, comfort and prejudices of their elders, and what you call heroism is just an expression of this simple fact; there is never a scarcity of idiots.'
            },{
              text: 'The bomb lives only as it is falling'
            }]
          })
        })
    })
    .then( ()=> {
      return Author.create({
        name: 'Terry Pratchett',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/09/05/15/terry-pratchett.jpg?w968h681'
      })
    })
    .then( (author)=> {
      return Series.create({
        name: 'Disc World',
        genre: 'Fantasy',
        author: author
      })
    })
    .then( (series)=>{
      return Book.create({
        title: 'The Colour Of Magic',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/4d/The_Colour_of_Magic_%28cover_art%29.jpg',
        author: series.author,
        series: series,
        quotes: [
          {text: 'Tourist, Rincewind decided, meant "idiot".'},
          {text: 'Reflected-sound-of-underground-spirits?'},
          {text: 'Let\'s just say that if complete and utter chaos was lightning, he\'d be the sort to stand on a hilltop in a thunderstorm wearing wet copper armour and shouting "All gods are bastards".'}
        ]
      })
        .then(()=>{
          return Book.create({
            title: 'The Light Fantastic',
            image: 'https://upload.wikimedia.org/wikipedia/en/8/87/TLF.cover.jpg',
            author: series.author,
            series: series,
            quotes: [
              {text: 'It looked like the sort of book described in library catalogues as "slightly foxed", although it would be more honest to admit that it looked as though it had beed badgered, wolved and possibly beared as well.'},
              {text: 'A Thaum is the basic unit of magical strength. It has been universally established as the amount of magic needed to create one small white pigeon or three normal sized billiard balls.'},
              {text: 'He moved in a way that suggested he was attempting the world speed record for the nonchalant walk.'}
            ]
          })
        })
        .then(()=>{
          return Book.create({
            title: 'Equal Rites',
            image: 'https://upload.wikimedia.org/wikipedia/en/c/ca/EqR.cover.jpg',
            author: series.author,
            series: series,
            quotes: [
              {text: 'They both savoured the strange warm glow of being much more ignorant than ordinary people, who were only ignorant of ordinary things.'},
              {text: 'They may have been ugly. they may have been evil. But when it came to poetry in motion, the Things had all the grace and coordination of a deck-chair.'},
              {text: 'For animals, the entire universe has been neatly divided into things to (a) mate with, (b) eat, (c) run away from, and (d) rocks.'}
            ]
          })
        })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
