const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const teamController = require('../controllers/teams')
const skaterController = require('../controllers/skaters')
const videoController = require('../controllers/videos')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/teams', teamController.index)
router.get('/teams/:id', teamController.show)

router.get('/skaters', skaterController.index)
router.get('/skaters/:id', skaterController.show)

router.get('/videos', videoController.index)
router.get('/videos/:id', videoController.show)

router.post('/videos/:id/comments', secureRoute, videoController.comments)

module.exports = router
