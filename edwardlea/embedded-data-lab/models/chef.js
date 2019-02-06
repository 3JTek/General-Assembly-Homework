const mongoose = require('mongoose')

const chefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  from: { type: String, required: true }
})

chefSchema.virtual('restaurant', {
  ref: 'Restaurant',
  localField: '_id',
  foreignField: 'chef'
})

//invokes the use of vertuals within the model
chefSchema.set('toJSON', {
  virtuals: true,
  //removes feilds from the json response
  transform(doc, json) {
    delete json.__v
    delete json.id
    return json
  }
})

module.exports = mongoose.model('Chef', chefSchema)
