const router = require('express').Router()
const trackController = require('../controllers/tracks')
const authController = require('../controllers/auth')

router.route('/tracks')
  .get(trackController.index)
  .post(trackController.post)

router.route('/register')
  .post(authController.register)


router.route('/login')
  .post(authController.login)

router.route('/tracks/:id')
  .get(trackController.show)
  .delete(trackController.delete)
  .put(trackController.update)

module.exports = router
