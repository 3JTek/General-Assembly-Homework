const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const authorController = require('../controllers/authors')
const bookController = require('../controllers/books')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/authors', authorController.index)
router.get('/authors/:id', authorController.show)

router.get('/books', bookController.index)
router.get('/books/:id', bookController.show)

router.post('/books/:id/comments', secureRoute, bookController.commentCreate)

module.exports = router
