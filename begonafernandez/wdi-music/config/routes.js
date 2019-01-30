const router = require('express').Router()
const trackController = require('../controllers/tracks')

router.route('/tracks')
  .get(trackController.index)
  .post(trackController.post)


router.route('/tracks/:id')
  .get(trackController.show)
  .delete(trackController.delete)
  .put(trackController.update)

module.exports = router
