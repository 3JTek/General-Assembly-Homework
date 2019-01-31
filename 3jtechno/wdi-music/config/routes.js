const router = require('express').Router()
const trackController = require('../controllers/tracks')
const userController = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

router.route('/register')
  .post(userController.register)

router.route('/login')
  .post(userController.login)

router.route('/tracks')
  .get(trackController.index)
  .post(secureRoute, trackController.post)

router.route('/tracks/:id')
  .get(trackController.show)
  .delete(secureRoute, trackController.delete)
  .put(secureRoute, trackController.update)

module.exports = router
