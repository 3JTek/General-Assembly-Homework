const router = require('express').Router()
const hairdryersController = require('../controllers/hairdryers')
const authController = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')




router.route('/hairdryers')
  .get(hairdryersController.index)
  .post(secureRoute, hairdryersController.create)

router.route('/hairdryers/:id')
  .get(hairdryersController.show)
  .put(hairdryersController.update)
  .delete(hairdryersController.delete)

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

module.exports = router
