const router = require('express').Router()

const secureRoute = require('../lib/secureRoute')
const authController = require('../controllers/auth')
const authorController = require('../controllers/authors')
const bookController = require('../controllers/books')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/authors', authorController.index)
router.get('/authors/:id', authorController.show)

router.route('/books')
  .get(bookController.index)
  .post(bookController.create)

router.route('/books/:id')
  .get(bookController.show)
  .put(bookController.update)

router.post('/books/:id/comments', secureRoute, bookController.commentCreate)

module.exports = router
