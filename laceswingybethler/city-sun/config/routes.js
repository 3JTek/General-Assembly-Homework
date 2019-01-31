const router = require('express').Router()
const forecastController = require('../controllers/translate')


router.route('/forecast')
  .get(forecastController.forecast)

module.exports = router
