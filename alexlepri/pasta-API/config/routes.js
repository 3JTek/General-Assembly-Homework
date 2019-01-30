const router = require('express').Router()
const pastasController = require('../controllers/pastas')
const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')



router.route( '/pastas')
  .get( pastasController.index )
  .post( secureRoute, pastasController.create )

router.route( '/register')
  .post(authController.register)


router.route( '/login')
  .post(authController.login)


router.route( '/confirm/:code')
  .get(authController.confirm)


router.route( '/pastas/:id')
  .get( pastasController.show)


router.route( '/pastas/:id')
  .delete( pastasController.delete)


router.route( '/pastas/:id')
  .put(pastasController.update)


module.exports = router
