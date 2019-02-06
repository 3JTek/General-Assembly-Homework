const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const chefsController = require('../controllers/chefs')
const restaurantsController = require('../controllers/restaurants')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/chefs', chefsController.index)
router.post('/chefs', chefsController.create)

router.get('/restaurants', restaurantsController.index)
router.get('/restaurants/:id', restaurantsController.show)

router.post('/restaurants/:id/comments', secureRoute, restaurantsController.commentCreate)

module.exports = router
