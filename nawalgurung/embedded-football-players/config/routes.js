const router = require('express').Router()

// const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const playersController = require('../controllers/players')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/players', playersController.index)
router.get('/players/:id', playersController.show)



module.exports = router
