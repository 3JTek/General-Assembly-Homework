const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
mongoose.connect('mongodb://localhost/pizzas-express')

const pizzaSchema = new mongoose.Schema({
  name: {type: String, required: true},
  origin: {type: String},
  ingredients: {type: String, required: true}
})

const Pizza = mongoose.model('Pizza', pizzaSchema)
//allows us to write the body
app.use(bodyParser.json())

//get pizzas INDEX PAGE
app.get('/pizzas',(req,res) => {
  Pizza
    .find()
    .then(pizzas => res.status(200).json(pizzas))
})
//CREATE pizzas
app.post('/pizzas',(req,res)=>{
  Pizza
    .create(req.body)
    .then(pizzas => res.status(201).json(pizzas))
    .catch(err => res.status(422).json(err.errors))
})


app.listen(4000, ()=> console.log('All is running on port 4000'))
