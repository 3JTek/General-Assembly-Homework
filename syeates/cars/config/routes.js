const router = require('express').Router()

const carsController = require('../controllers/cars')
const usersController = require('../controllers/auth')

const secureRoute = require('../lib/secureRoute')

router.route('/cars')
  .get(carsController.index)
  .post(secureRoute, carsController.create)


router.route('/cars/:id')
  .get(carsController.show)
  .put(carsController.update)
  .delete(carsController.delete)

router.route('/register')
  .post(usersController.register)
  .post(carsController.create)


router.route('/login')
  .post(usersController.login)

router.route('/confirm/:code')
  .post(usersController.confirm)


module.exports = router
