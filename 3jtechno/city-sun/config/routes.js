const router = require('express').Router()
const forecastController = require('../controllers/forecast')

router.route('/forecast')
  .get(forecastController.forecast)

module.exports = router
