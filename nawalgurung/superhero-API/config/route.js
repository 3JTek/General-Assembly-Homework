const router = require('express').Router()
const superheroControler = require('../controllers/superheros')
const authController = require('../controllers/auth')
const secureRoute =  require('../lib/secureRoute')


router.route('/register')
  .post(authController.register)

router.route('/login')
  .post(authController.login)

router.route('/superheros')
  .get(superheroControler.index)
  .post(secureRoute, superheroControler.create)

router.route('/superheros/:id')
  .get(superheroControler.show)
  .put(superheroControler.edit)
  .delete(superheroControler.delete)


module.exports = router
