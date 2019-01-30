const router = require('express').Router()
const mugsController = require('../controllers/mugs')
const authController = require('../controllers/auth')

router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

router.route('/mugs')
  .get(mugsController.index)
  .post(mugsController.create)

router.route('/mugs/:id')
  .get(mugsController.show )
  .put(mugsController.update)
  .delete(mugsController.delete)

module.exports = router
