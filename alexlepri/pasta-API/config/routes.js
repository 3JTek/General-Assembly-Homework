const router = require('express').Router()
const pastasControllers = require('../controller/pastas')
const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')



router.route( '/pastas')
  .get( pastasControllers.index )
  .post( secureRoute, pastasControllers.create )

router.route( '/register')
  .post(authController.register)


router.login( '/login')
  .get(authController.login)


router.route( '/pastas/:code')
  .get(authController.confirm)


router.route( '/pastas/:id')
  .get( pastasControllers.show)


router.route( '/pastas/:id')
  .delete( pastasControllers.delete)


router.route( '/pastas/:id')
  .put(pastasControllers.update)



module.exports = router
