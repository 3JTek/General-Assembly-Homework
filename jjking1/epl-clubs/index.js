// testing
// {
// 	"name": "Chelsea FC",
// 	"manager": "Maurizio Sarri",
// 	"dateEstablished": "1905-03-10",
// 	"titles": 8,
// 	"stadium": "Stamford Bridge",
// 	"logo": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/200px-Chelsea_FC.svg.png"
// }


const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost/clubs-db')


const clubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manager: { type: String },
  dateEstablished: { type: Date },
  titles: { type: Number },
  stadium: { type: String, required: true },
  logo: { type: String, required: true }
})

const Club = mongoose.model('Club', clubSchema)

app.use(bodyParser.json())

app.get('/epl-clubs/:id', (req, res) => {
  Club
    .findById(req.params.id)
    .then(club => res.status(200).json(club))
    .catch(err => res.status(404).json(err.message))
})

app.get('/epl-clubs', (req,res) => {
  Club
    .find()
    .then(clubs => res.status(200).json(clubs))
    .catch(err => console.log(err))
})

app.post('/epl-clubs', (req, res) => {
  Club
      .create(req.body)
      .then(club => res.status(201).json(club))
      .catch(err => res.status(422).json(err.errors))
})

app.all('/*', (req, res) => {
  res.status(404).json({ message: "not found" })
})


app.listen(4000, () => console.log('express is running on port 4000'))
