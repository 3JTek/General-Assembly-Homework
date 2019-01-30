const router = require('express').Router()
const shipsController = require('../controllers/ships')
const authController = require('../controllers/auth')

router.route('/ships')
  .get(shipsController.index)
  .post(shipsController.create)

router.route('/ships/:id')
  .get(shipsController.show)
  .put(shipsController.update)
  .delete(shipsController.delete)

router.route('/register')
  .post(authController.register)

module.exports = router
