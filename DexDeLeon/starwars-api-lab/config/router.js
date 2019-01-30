const router = require('express').Router()
const shipsController = require('../controllers/ships')
const authController = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/ships')
  .get(shipsController.index)
  .post(secureRoute, shipsController.create)

router.route('/ships/:id')
  .get(shipsController.show)
  .put(secureRoute, shipsController.update)
  .delete(secureRoute, shipsController.delete)

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

module.exports = router
