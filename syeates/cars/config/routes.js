const router = require('express').Router()

const carsController = require('../controllers/cars')



router.route('/cars')
  .get(carsController.index)
  .post(carsController.create)


router.route('/cars/:id')
  .get(carsController.show)
  .put(carsController.update)
  .delete(carsController.delete)


module.exports = router
