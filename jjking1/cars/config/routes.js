const router = require('express').Router()
const authController = require('../controllers/auth')
const carsController = require('../controllers/cars')
const secureRoute = require('../lib/secureRoute')

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

router.route('/cars')
 .get(carsController.index)
 .post(secureRoute, carsController.create)


router.route('/cars/:id')
  .get(carsController.show)
  .put(carsController.update)
  .delete(carsController.delete)


module.exports = router
