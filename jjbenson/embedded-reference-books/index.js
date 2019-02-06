require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

//Host dist folder as static files
app.use(express.static(`${__dirname}/dist`))

//Link to mongoDB
mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.use(routes)

//Enable refreshes on page
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})

//Use port environment variable
app.listen(process.env.PORT, () => console.log(`Express is running on port ${process.env.PORT}`))
