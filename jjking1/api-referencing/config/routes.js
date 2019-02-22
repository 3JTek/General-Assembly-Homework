const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const tvshowsController = require('../controllers/tvshows')
const actorsController = require('../controllers/actors')
const authController = require('../controllers/auth')

router.get('/actors', actorsController.index)
router.get('/actors/:id', actorsController.show)

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/tvshows',tvshowsController.index)
router.post('/tvshows/:id/comments', secureRoute, tvshowsController.commentCreate)
router.get('/tvshows/:id', tvshowsController.show)
router.post('/tvshows', secureRoute, tvshowsController.create)


module.exports = router
