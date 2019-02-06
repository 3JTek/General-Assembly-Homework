const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const authorsController = require('../controllers/authors')
const booksController = require('../controllers/books')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/authors', authorsController.index)
router.get('/authors/:id', authorsController.show)

router.get('/books', booksController.index)
router.get('/books/:id', booksController.show)
router.post('/books', booksController.create)


router.post('/books/:id/comments', secureRoute, booksController.commentCreate)

module.exports = router
