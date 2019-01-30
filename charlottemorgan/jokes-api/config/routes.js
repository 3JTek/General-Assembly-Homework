const router = require('express').Router()
const jokesController = require('../controllers/jokes')

router.route('/jokes')
  .get(jokesController.index)
  .post(jokesController.create)

router.route('/jokes/:id')
  .get(jokesController.show)
  .put(jokesController.update)
  .delete(jokesController.delete)

module.exports = router
