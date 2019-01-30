const router = require('express').Router()
const countriesController = require('../controllers/countries')
const authController = require('../config/auth')

const secureRoute = require('../lib/secureRoute')

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

router.route('/countries')
  .get(countriesController.index)
  .post(secureRoute, countriesController.create)

router.route('/countries/:id')
  .get(countriesController.show)
  .put(countriesController.update)
  .delete(countriesController.delete)

module.exports = router
