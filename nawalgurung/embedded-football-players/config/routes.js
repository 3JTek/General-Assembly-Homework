const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const playersController = require('../controllers/players')
const teamsController = require('../controllers/teams')


router.get('/players', playersController.index)
router.get('/players/:id', playersController.show)


router.get('/players/new', playersController.newPlayer)
router.post('/players/:id/comments', secureRoute, playersController.commentCreate)

router.get('/teams', teamsController.index)
router.get('/teams/:id', teamsController.show)

router.post('/teams/new', secureRoute, teamsController.create)

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router
