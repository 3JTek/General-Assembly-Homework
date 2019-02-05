const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const kittensController = require('../controllers/kittens')
const kitpicsController = require('../controllers/kitpics')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/kittens', kittensController.index)
router.get('/kittens/:id', kittensController.show)

router.get('/kitpics', kitpicsController.index)
router.get('/kitpics/:id', kitpicsController.show)

router.post('/tracks/:id/comments', secureRoute, kittensController.commentCreate)

module.exports = router
