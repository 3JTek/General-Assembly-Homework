const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const kittensController = require('../controllers/kittens')

//
// router.post('/register', authController.register)
// router.post('/login', authController.login)

router.get('/kittens', kittensController.index)
// router.get('/kittens/:id', kittensController.show)
router.post('/kittens', kittensController.createKitten)

//
// router.get('kittens/:id/pictures', kittensController.showPictures)
// router.get('kittens/:id/pictures/:pictureId', kittensController.showPicture)
// router.post('kittens/:id/pictures', kittensController.createPicture)
// router.get('kittens/:id/pictures/:pictureId/comments', kittensController.showComments)
// router.post('kittens/:id/pictures/:pictureId/comments', secureRoute, kittensController.createComment)



module.exports = router
