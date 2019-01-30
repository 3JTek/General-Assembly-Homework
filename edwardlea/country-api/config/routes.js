const router = require('express').Router()
const countriesController = require('../controllers/countries')


router.route('/countries')
  .get(countriesController.index)
  .post(countriesController.create)

router.route('/countries/:id')
  .get(countriesController.show)
  .put(countriesController.update)
  .delete(countriesController.delete)



module.exports = router
