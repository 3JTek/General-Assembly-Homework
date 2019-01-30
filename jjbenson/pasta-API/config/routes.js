const router = require('express').Router()
const pastasControllers = require('../controller/pastas')
const authControllers = require('../controller/auth')

const secureRoute = require('../lib/secureRoute')

router.route('/register')
  .post( authControllers.register)

router.route('/login')
  .post( authControllers.login)

router.route( '/pastas')
  .get( pastasControllers.index )
  .post( secureRoute, pastasControllers.create )

router.route( '/pastas/:id')
  .get( secureRoute, pastasControllers.show)
  .put( secureRoute, pastasControllers.update)
  .delete( secureRoute, pastasControllers.delete)


module.exports = router
