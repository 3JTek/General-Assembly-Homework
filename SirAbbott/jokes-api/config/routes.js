const router = require('express').Router()
const jokesController = require('../controllers/jokes')
const authController = require('../controllers/auth')

router.route('/register')
  .post(authController.register)

router.route('/jokes')
  .get(jokesController.index)
  .post(jokesController.create)

router.route('/jokes/:id')
  .get(jokesController.show)
  .put(jokesController.update)
  .delete(jokesController.delete)

module.exports = router
