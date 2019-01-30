const router = require('express').Router()
const shipsController = require('../controllers/ships')

router.route('/ships')
  .get(shipsController.index)
  .post(shipsController.create)

router.route('/ships/:id')
  .get(shipsController.show)
  .put(shipsController.update)
  .delete(shipsController.delete)

module.exports = router
