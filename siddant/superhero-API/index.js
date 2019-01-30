const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Superhero = require('./model/superhero')
const superHeroController = require('./controllers/superheros')
const app = express()

mongoose.connect('mongodb://localhost/superheros-db')


app.use(bodyParser.json())

//index
app.get('/superheros', superHeroController.index)

//create
app.post('/superheros', superHeroController.create)

//show
app.get('/superheros/:id', superHeroController.show)

//edit
app.put('/superheros/:id',superHeroController.edit)

//delete
app.delete('/superheros/:id',superHeroController.delete)




app.listen(4000, () => console.log('Superhero server is running -----4000'))
