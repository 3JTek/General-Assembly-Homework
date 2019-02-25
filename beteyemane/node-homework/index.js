const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost/mugs')

const mugSchema = new mongoose.Schema({
  name: {type: String, required: true},
  brand: {type: String},
  price: {type: String, required: true},
  material: {type: String},
  image: {type: String, required: true }
})
//mongoose??
const Mug = mongoose.model('Mug', mugSchema)
app.use(bodyParser.json())

// find all
app.get('/mugs', (req, res) => {
  Mug
    .find()
    .then(mug => res.status(200).json(mug))
})

// create a new mug
app.post('/mugs', (req, res) => {
  Mug
    .create(req.body)
    .then(mug =>  res.status(200).json(mug))
})

//find by id
app.get('/mugs/:id', (req, res) => {
  Mug
    .findById(req.params.id)
    .then(mug => res.status(200).json(mug))
})

//name
// app.get('/mugs/:name', (req, res) => {
//   Mug
//
//   const findName = req.params.name
//     .find({name: findName})
//     .then(mug => res.status(200).json(mug))
// })
// app.put('/mugs/:id', (req, res) => {
//   Mug
//   console.log(req.body)
//     .then(mug => res.status(200).json(mug))
//
//   //find by id
//   //get body
//   // .findById(req.params.id)
// })

// delete a mug. find the id first

app.delete('/mugs/:id', (req, res) => {
  Mug
    .findByIdAndRemove(req.params.id)
    .then(res.status(200).json({message: 'Deleted'}))
})

app.all('/*', (req, res) => {
  res.status(404).json({message: 'Not found'})
})

app.use((err, req, res, next) => {
  res.status(500).json({message: 'Goodnight'})
  next(err)
})

app.listen(4000, () => console.log('Mugs is now running!'))
