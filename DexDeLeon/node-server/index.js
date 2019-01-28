const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/guitardb')

app.get('/guitars', (req, res) => {
  res.status(200).json({ route: 'index' })
})

app.post('/guitars', (req, res) => {
  res.status(201).json({ route: 'create' })
})

app.listen(4000, () => console.log('Running on 4000'))
