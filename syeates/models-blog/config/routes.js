const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const blogsController = require('../controllers/blogs')

router.post('/register', secureRoute, authController.register)
router.post('/login', secureRoute, authController.login)

router.get('/blogs', blogsController.index)
router.get('/blogs/:id', blogsController.show)

router.post('/blogs/:id/comments', blogsController.commentCreate)

module.exports = router
