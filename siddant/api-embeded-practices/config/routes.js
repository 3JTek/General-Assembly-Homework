const router = require('express').Router()
const teamsController = require('../controllers/teams')
const playersController = require('../controllers/players')

const authController = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')


router.get('/players', playersController.index)
router.post('/players', secureRoute, playersController.create)

router.get('/players/:id', playersController.show)
router.post('/players/:id/comment', secureRoute, playersController.comment)


router.get('/teams', teamsController.index)
router.post('/teams',secureRoute, teamsController.create)

router.get('/teams/:id', teamsController.show)



router.post('/register', authController.register)
router.post('/login', authController.login)



// router.post('/register', (req, res) =>{
//   res.status(200).json({message: 'register' })
// })
// router.post('/login', (req, res) =>{
//   res.status(200).json({message: 'login' })
// })


module.exports = router
