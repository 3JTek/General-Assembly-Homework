const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const chefsController = require('../controllers/chefs')
const restarauntsController = require('../controllers/restaraunts')


router.post('/register', authController.register)
router.post('/login', authController.login)
//
router.get('/chefs', chefsController.index)
router.post('/chefs', chefsController.create)
//
router.get('/restaraunts', restarauntsController.index)
router.post('/restaraunts', restarauntsController.create)

router.post('/restaraunts/:id/comments', secureRoute, restarauntsController.createComment)


module.exports = router
