const mongoose = require('mongoose')

const chefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  from: { type: String, required: true }
})

chefSchema.virtual('restaraunts', {
  ref: 'Restaraunt',  //looks in collection of Restaraunt model
  localField: '_id', //looks for a restaraunt with same id
  foreignField: 'chef' //returns the chef
})

chefSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.__v
    delete json.id
    return json
  }
})

module.exports = mongoose.model('Chef', chefSchema)
