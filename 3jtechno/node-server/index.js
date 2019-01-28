const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

//Index
app.get('/films', (req, res) => {
  res.json({response: 'Get'})
})

//Create
app.post('/films', (req, res) => {
  res.json({response: 'Post'})
})

//Show
app.get('/films/:id', (req, res) => {
  res.json({response: 'Get One'})
})

//Update
app.put('/films/:id', (req, res) => {
  res.json({response: 'Put'})
})

//Delete
app.delete('/films/:id', (req, res) => {
  res.json({response: 'Delete'})
})

app.listen(4000, () => console.log('Server Up and Running'))
