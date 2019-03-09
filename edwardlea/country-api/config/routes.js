const router = require('express').Router()
const countriesController = require('../controllers/countries')
const authController = require('../controllers/auth')
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
  .put(secureRoute, countriesController.update)
  .delete(secureRoute, countriesController.delete)



module.exports = router