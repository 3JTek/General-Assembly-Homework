const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

const artistSchema = new mongoose.Schema({
  name: {type: String, required: true},
  deathDate: {type: Date, required: true},
  deathCause: {type: String, required: true},
  portrait: {type: String, required: true}
})

const Artist = mongoose.model('Artist', artistSchema)

mongoose.connect('mongodb://localhost/TwentySevenClub')

app.use(bodyParser.json())

//Index
app.get('/artists', (req, res) => {
  console.log(Artist)
  Artist
    .find()
    .then(artists => res.status(200).json(artists))

})

//Create
app.post('/artists', (req, res) => {
  Artist
    .create(req.body)
    .then(artist => res.status(201).json(artist))
    .catch(err => console.log(err.message))
})

//Show
app.get('/artists/:id', (req, res) => {
  Artist
    .findById(req.params.id)
    .then(artists => res.status(200).json(artists))
})

//Update
app.put('/artists/:id', (req, res) => {
  res.json({response: 'Put'})
})

//Delete
app.delete('/artists/:id', (req, res) => {
  console.log(req.params.id)
  Artist
    .deleteOne({_id: req.params.id})
    .then(() => res.status(204))
    .catch(err => console.log(err.message))
})

app.listen(4000, () => console.log('Server Up and Running'))
//
// [
// {
// 	"name": "Kurt Cobain",
// 	"deathDate": "1994-04-05",
//     "deathCause": "Suicide Shot",
//     "portrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Nirvana_around_1992.jpg/220px-Nirvana_around_1992.jpg"
// },
// {
//   "name": "Jim Morrison",
//   "deathDate": "1971-07-03",
//   "deathCause": "Heart failure"
//   "portrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Jim_Morrison_1969.JPG/220px-Jim_Morrison_1969.JPG"
// },
// {
//   "name": "Amy Winehouse",
//   "deathDate": "2011-07-23",
//   "deathCause": "Alcohol poisoning",
//   "portrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Amy_Winehouse_f4962007_crop.jpg/230px-Amy_Winehouse_f4962007_crop.jpg"
// }
// ]
