const router = require('express').Router()

const authController = require('../controllers/auth')
const gelatosController = require('../controllers/gelatos')
const flavoursController = require('../controllers/flavours')
const extrasController = require('../controllers/extras')
const secureRoute = require('../lib/secureRoute')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/gelatos', gelatosController.index)
router.get('/gelatos/id', gelatosController.show)

router.get('/flavours', flavoursController.index)
router.get('/flavours/id', flavoursController.show)

router.get('/extras', extrasController.index)
router.get('/extras/id', extrasController.show)

router.post('/extras/:id/comments', secureRoute, extrasController.commentCreate)

module.exports = router
