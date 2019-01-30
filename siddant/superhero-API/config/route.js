const router = require('express').Router()
const superheroControler = require('../controllers/superheros.js')

router.route('/superheros?field=')
  .get(superheroControler.index)

router.route('/superheros')
  .get(superheroControler.index)
  .post(superheroControler.create)

router.route('/superheros/:id')
  .get(superheroControler.show)
  .put(superheroControler.edit)
  .delete(superheroControler.delete)


module.exports = router
