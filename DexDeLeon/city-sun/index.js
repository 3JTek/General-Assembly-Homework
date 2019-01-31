require('dotenv').config()

const express = require('express')
const app = express()

app.listen(4000, () => console.log('Express running on 4000'))
