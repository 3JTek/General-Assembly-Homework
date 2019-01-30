const router = require('express').Router()
const trackController = require('../controllers/tracks')
const authController = require('../controllers/auth')
const secureRoute =require('../lib/secureRoute')

router.route('/tracks')
  .get(trackController.index)
  .post(secureRoute, trackController.post)

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

router.route('/tracks/:id')
  .get(trackController.show)
  .delete(secureRoute, trackController.delete)
  .put(secureRoute, trackController.update)

module.exports = router
