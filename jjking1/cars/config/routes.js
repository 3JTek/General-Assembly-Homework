const router = require('express').Router()
const authController = require('../controllers/auth')
const carsController = require('../controllers/cars')

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

router.route('/cars')
 .get(carsController.index)
 .post(carsController.create)


router.route('/cars/:id')
  .get(carsController.show)
  .put(carsController.update)
  .delete(carsController.delete)


module.exports = router
