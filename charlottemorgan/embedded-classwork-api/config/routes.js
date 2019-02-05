const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const makesController = require('../controllers/makes')
const manufacturersController = require('../controllers/manufacturers')
const guitarsController = require('../controllers/guitars')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/makes', makesController.index)
router.get('/makes/:id', makesController.show)

router.get('/manufacturers', manufacturersController.index)
router.get('/manufacturers/:id', manufacturersController.show)

router.get('/guitars', guitarsController.index)
router.get('/guitars/:id', guitarsController.show)

router.post('/guitars/:id/comments', secureRoute, guitarsController.commentCreate)

module.exports = router
