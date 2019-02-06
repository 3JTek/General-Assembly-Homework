require('dotenv').config()

const mongoose = require('mongoose')

const Promise = require('bluebird')
mongoose.Promise = Promise

const Gelato = require('../models/gelato')
const Flavour = require('../models/flavour')
const Extra = require('../models/extra')


mongoose.connect(process.env.MONGODB_URI, (err,db)=>{
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        extra: Extra.create({
          title: 'chocolate sauce',
          image: 'https://cdn2.bigcommerce.com/server2800/cd685/products/2316/images/8588/FA0736U__52494.1516629942.220.220.jpg?c=2'
        }),
        flavour: Flavour.create({
          name: 'strawberry',
          description: 'blending in fresh strawberries or strawberry flavoring'
        })
      })
    })
    .then(data => {
      return Gelato.create({
        name: 'Magnum Vegan',
        ingredients: 'Water, sugar, cocoa butter1, cocoa mass1, glucose syrup',
        price: 1.00,
        description: 'A velvety Vegan ice cream dipped in chocolate couverture.',
        image: 'https://www.veganfoodandliving.com/wp-content/uploads/2018/09/vegan-magnum-1080x444-1-768x316.jpg',
        flavour: data.flavour,
        extra: data.extra
      })
    })
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
