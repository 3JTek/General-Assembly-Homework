const router = require('express').Router()
const pastasControllers = require('../controller/pastas')


router.route( '/pastas')
  .get( pastasControllers.index )
  .post( pastasControllers.create )

router.route( '/pastas/:id')
  .get( pastasControllers.show)

router.route( '/pastas/:id')
  .delete( pastasControllers.delete)


module.exports = router
