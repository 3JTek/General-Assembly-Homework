const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app =  express()

mongoose.connect('mongodb://localhost/pokemons-db')

const pokemonSchema = new mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  height: {type: Number},
  weight: {type: Number},
  gender: {type: String},
  weakness: {type: String, required: true},
  owner: {type: String, required: true}
})
const Pokemon = mongoose.model('Pokemon',pokemonSchema)

app.use(bodyParser.json())

app.get('/pokemons', (req, res) =>{
  Pokemon
    .find()
    .then(pokemon => res.status(200).json(pokemon))
})

app.post('/pokemons', (req, res) =>{
  Pokemon
    .create(req.body)
    .then(pokemon => res.status(201).json(pokemon))
    .catch(err => res.status(422).json(err.errors))
})

app.get('/pokemons/:id', (req, res) =>{
  Pokemon
    .findById(req.params.id)
    .then(pokemon => res.status(200).json(pokemon))
    .catch(err => res.status(404).json(err))
})

app.listen(4000, ()=> console.log('server has been started at port 4000'))
