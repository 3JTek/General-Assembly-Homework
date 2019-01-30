const router = require('express').Router()
const hairdryersController = require('../controllers/hairdryers')




router.route('/hairdryers')
  .get(hairdryersController.index)
  .post(hairdryersController.create)

router.route('/hairdryers/:id')
  .get(hairdryersController.show)
  .put(hairdryersController.update)
  .delete(hairdryersController.delete)


module.exports = router
