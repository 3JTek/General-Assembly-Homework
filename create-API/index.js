const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()


mongoose.connect('mongodb://localhost/superHero')

//create blueprint of data structure/model
const superHeroSchema = new mongoose.Schema({
  name: {type: String, required: true},
  publisher: {type: String},
  alter_ego: {type: String},
  strength: {type: String},
  debut_date: {type: Date}
})

// mongoose will save plural name of the collecation
const Hero = mongoose.model('SuperHero', superHeroSchema)

app.use(bodyParser.json())

//Get route for index page
app.get('/superheros', (req, res) => {
  Hero
    .find()
    .then(superhero => res.status(200).json(superhero))
})

//Create route
app.post('/superheros', (req, res) => {
  Hero
    .create(req.body)
    .then(superhero => res.status(201).json(superhero))
  console.log(req.body)
})



//Show route
app.get('/superheros/:id', (req, res) => {
  Hero
    .findById(req.params.id)
    .then(superhero => res.status(200).json(superhero))
})


app.listen(4000, () => console.log('Express is running on port 4000'))
