const router = require('express').Router()
const jokesController = require('../controllers/jokes')
const authController = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

router.route('/jokes')
  .get(jokesController.index)
  .post(secureRoute, jokesController.create)

router.route('/jokes/:id')
  .get(jokesController.show)
  .put(jokesController.update)
  .delete(jokesController.delete)

module.exports = router
