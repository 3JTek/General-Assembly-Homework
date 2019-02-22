/********* API DESCRIPTION *********

This API allows users to query the Punctuation Mark Database.
It allow the creation of new punctuation marks,
the updating of existing marks,
and the deletion of marks.


******* END POINTS ******

  POST /marks -> Creats a new Punctuation mark

  GET /marks -> Returns all punctuation marks
  GET /marks/:id -> Returns the punctuation mark that matches the id*
  GET /marks/:name -> Returns the punctuation mark/s that match the name/name partial

  PUT /marks/:id -> Updates the punctuation mark that matches the id*

  DELETE /marks/:id -> Deletes the punctuation mark that matches the id*
  DELETE /marks/:name -> Deletes the punctuation mark/s that match the name/name partial

  * A partial ID may match more than one record in the database

******** FIELDS *******

GET EXAMPLE
{
  "otherNames": [
    "Exclamation",
    "point",
    "Bang",
    "Shriek",
    "Pling"
  ],
  "_id": "5c4f28da0c70022719790a42",
  "name": "Exclamation Mark",
  "description": "The exclamation mark (British English) or exclamation point (American English) is a punctuation mark usually used after an interjection or exclamation to indicate strong feelings or high volume (shouting), or to show emphasis, and often marks the end of a sentence",
  "character": "!",
  "__v": 0,
  "example": "You are crazy!"
}

\
POST EXAMPLE
{
  "name": "Question Mark",
  "description": "The question mark is a punctuation mark that indicates an interrogative clause or phrase in many languages.",
  "character": "?",
  "otherNames": [
    "interrogation point",
    "query",
    "eroteme"
  ],
  "example": "What are you doing?"
}

*************************************/
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//App (server) uses express
const app = express()

//Connect to database with mongoose
mongoose.connect('mongodb://localhost/pmdb')

//Record blueprint
const markSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  character: {type: String, required: true},
  otherNames: {type: Array},
  example: {type: String}

})

//Link the schema to the records
const Mark = mongoose.model('Mark', markSchema)

//Use body parser to handle response body
app.use(bodyParser.json())



//****** CREATE ******//

//*** success ***//
app.post('/marks', (req, res) => {
  Mark
    .create(req.body)
    .then(film => res.status(201).json(film))
    //Invalid form input
    .catch(err => {
      //Get the name of the fields that have errored
      const keys = Object.keys(err.errors)
      res.status(422).json(`${keys} must be defined`)
    })
})

//*** fail ***//
app.post('/*', (req, res) =>{
  res.status(422).json('This end point does not accept post requests')
})



//******    READ   ******//

//*** success ***//

//Search for IDs
app.get('/marks/:id', (req, res, next) =>{
  //Find name
  Mark.find({_id: req.params.id})
    .then( mark => res.status(200).json(mark) )
    //If not found continue to the names
    .catch( () => next())
})

//Search for Names
app.get('/marks/:name', (req, res) =>{
  //Make case insensitive
  const search = new RegExp(req.params.name,'i')

  //Find name
  Mark.find({name: search})
    .then( mark => res.status(200).json(mark) )
    .catch( err=> res.status(404).json(err.errors))
})


//list INDEX
app.get('/marks', (req, res) =>{
  Mark.find()
    .then( marks => res.status(200).json(marks) )
})

//*** fail ***//
app.get('/*', (req, res) =>{
  res.status(404).json('File not found!')
})


//****** UPDATE ******//

//*** success ***//

//Search for IDs
app.put('/marks/:id', (req, res) =>{
  //Find id, put the body, return the new record (doesn't seem to work, it still returns original)
  Mark.findOneAndUpdate({_id: req.params.id}, req.body, {returnOriginal: false})
    .then( mark => res.status(202).json(mark))
    //If not found continue to the names
    .catch( err => res.status(422).json(err.errors))
})

//*** fail ***//
app.put('/*', (req, res) =>{
  res.status(422).json('This end point does not accept put requests')
})


//****** DELETE ******//

//*** success ***//

//Search for IDs
app.delete('/marks/:id', (req, res, next) =>{
  //Find name
  Mark.remove({_id: req.params.id})
    .then( (mark) => res.status(204).json(mark))
    //If not found continue to the names
    .catch( () => next())
})

//Search for Names
app.delete('/marks/:name', (req, res) =>{
  //Make case insensitive
  const search = new RegExp(req.params.name,'i')

  //Find name
  Mark.delete({name: search})
    .then( (mark) => res.status(204).json(mark))
    .catch( err => res.status(405).json(err.errors))
})


//*** fail ***//
app.delete('/*', (req, res) =>{
  res.status(422).json('This end point does not accept delete requests')
})




//****** SERVER ERROR ******//
app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({message: 'Well, this is embarrasing...🤔'})
  next()
})

app.listen(4000, () => {
  console.log('Server running on port 4000')
})
