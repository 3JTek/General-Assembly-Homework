const routes = require('express').Router()

const authController = require('../controllers/auth')
const makesController = require('../controllers/makes')
const variantsController = require('../controllers/variants')
const manufacturersController = require('../controllers/manufacturers')

routes.post('/register', authController.register)
routes.post('/login', authController.login)

routes.get('/manufacturers', manufacturersController.index)
routes.get('/makes', makesController.index)
routes.get('/variants', variantsController.index)

module.exports = routes
