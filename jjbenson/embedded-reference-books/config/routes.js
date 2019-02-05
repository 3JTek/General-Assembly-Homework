const router = require('express').Router()

// const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const authorsController = require('../controllers/authors')
const seriesController = require('../controllers/series')
const booksController = require('../controllers/books')

router.post('/api/register', authController.register)
router.post('/api/login', authController.login)

router.get('/api/authors', authorsController.index)
router.get('/api/authors/:id', authorsController.show)

router.get('/api/series', seriesController.index)
router.get('/api/series/:id', seriesController.show)

router.get('/api/books/:id', booksController.show)
router.get('/api/books', booksController.index)

// router.post('/books/:id/comments', secureRoute, booksController.commentCreate)

module.exports = router
