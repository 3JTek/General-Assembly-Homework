const router = require('express').Router()

const movieController = require('../controllers/movies')
const actorController = require('../controllers/actors')
const authController = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.post('/register', authController.register)

router.post('/login', authController.login)
router.get('/actors', actorController.index)
router.get('/actors/:id', actorController.show)

router.get('/movies', movieController.index)
router.get('/movies/:id', movieController.show)
router.post('/movies', secureRoute, movieController.create)

router.post('/movies/:id/comments', secureRoute, movieController.commentCreate)

module.exports = router
