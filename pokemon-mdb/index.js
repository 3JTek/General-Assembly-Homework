const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app =  express()


app.listen(4000, ()=> console.log('server has been started at port 4000'))
