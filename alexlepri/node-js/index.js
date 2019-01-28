const express = require('express')
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')


const app = express()

mongoose.connect('mongodb://localhost/player')




app.listen(4000, () => console.log('Express is running on port 4000'))
