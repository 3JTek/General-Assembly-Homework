const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app =  express()


app.get('/pokemons', (req, res) =>{
  console.log('list of pokemon')
})

app.post('/pokemons', (req, res) =>{
  console.log('pokemon has been added')
})

app.listen(4000, ()=> console.log('server has been started at port 4000'))
