const routes = require('express').Router()

const authController = require('../controllers/auth')
const makesController = require('../controllers/makes')
const variantsController = require('../controllers/variants')
const manufacturersController = require('../controllers/manufacturers')
const secureRoute = require('../lib/secureRoute')

routes.post('/register', authController.register)
routes.post('/login', authController.login)

routes.get('/manufacturers', manufacturersController.index)
routes.get('/manufacturers/:id', manufacturersController.show)
routes.get('/makes/', makesController.index)
routes.get('/makes/:id', makesController.show)
routes.get('/variants', variantsController.index)
routes.get('/variants/:id', variantsController.show)

routes.post('/variants/:id/comments', secureRoute, variantsController.commentCreate)

module.exports = routes
