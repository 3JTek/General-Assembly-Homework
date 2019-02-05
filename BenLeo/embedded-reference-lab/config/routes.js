const router = require('express').Router()

const authController = require('../controllers/authController')
const blogPostsController = require('../controllers/blogPostsController')

//CREATE NEW USER
router.post('/register', authController.register)
//LOGIN
router.post('/login', authController.login)

//GET ALL BLOG POSTS
router.get('/blog', blogPostsController.index)
//CREATE A NEW BLOG POSTS >>> SECURE
router.post('/blog', blogPostsController.create)

//CREATE NEW BLOG COMMENT >>> SECURE
router.post('/blog/comments')


module.exports = router
