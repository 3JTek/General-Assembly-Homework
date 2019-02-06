const router = require('express').Router()
const cocktailsController = require('../controllers/cocktails.js')
const authController = require('../controllers/auth.js')
const secureRoute = require('../lib/secureRoute')

router.post('/register', authController.register)

router.post('/login', authController.login)

router.post('/cocktails/:id/comments', secureRoute, cocktailsController.commentCreate)

router
  .get('/cocktails', cocktailsController.index)
  .post('/cocktails', cocktailsController.create)

module.exports = router
