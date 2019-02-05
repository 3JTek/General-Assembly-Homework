const router = require('express').Router()
const teamsController = require('../controllers/teams')
const playersController = require('../controllers/players')

const authController = require('../controllers/auth')



router.route('/players')
  .get(playersController.index)
  .post(playersController.create)

router.route('/players/:id')
  .get(playersController.show)


router.route('/teams')
  .get(teamsController.index)
  .post(teamsController.create)

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
