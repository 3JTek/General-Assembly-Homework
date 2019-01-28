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
    .catch(err => res.status(404).json(err))
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

app.delete('/pokemons/:id', (req, res) =>{
  Pokemon
    .remove({_id: req.params.id})
    .then(res.status(200).json({message: 'pokemon has been deleted'}))
    .catch(err => res.status(404).json(err))
})

app.put('/pokemons/:id', (req, res) =>{
  Pokemon
    .update({_id: req.params.id}, req.body)
    .then(pokemon => res.status(200).json(pokemon))
    .catch(err => res.status(404).json(err))
})


//error handling

app.all('/*', (req, res)=>{
  res.status(404).json({message: 'Cannot find your request'})
})

app.use((err, req, res, next)=>{
  res.status(500).json({ message: 'Server is currently down!' })
  next(err)
})

app.listen(4000, ()=> console.log('server has been started at port 4000'))
