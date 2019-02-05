const router = require('express').Router()
const teamsController = require('../controllers/teams')
const playersController = require('../controllers/players')
const leagueController = require('../controllers/league')

const authController = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')


router.get('/players', playersController.index)
router.post('/players', secureRoute, playersController.create)

router.get('/player/:id', playersController.show)
router.post('/player/:id/comment', secureRoute, playersController.comment)


router.get('/teams', teamsController.index)
router.post('/teams',secureRoute, teamsController.create)

router.get('/team/:id', teamsController.show)


router.get('/leagues', leagueController.index)
router.post('/leagues',secureRoute, leagueController.create)

router.get('/league/:id', leagueController.show)



router.post('/register', authController.register)
router.post('/login', authController.login)


module.exports = router
