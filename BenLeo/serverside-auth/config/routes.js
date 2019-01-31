const router = require('express').Router()
const mugsController = require('../controllers/mugs')
const authController = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

router.route('/mugs')
  .get(mugsController.index)
  .post(secureRoute, mugsController.create)

router.route('/mugs/:id')
  .get(mugsController.show )
  .put(secureRoute, mugsController.update)
  .delete(secureRoute, mugsController.delete)

module.exports = router
