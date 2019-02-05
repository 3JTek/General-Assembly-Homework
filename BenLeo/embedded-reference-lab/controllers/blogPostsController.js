const BlogPost = require('../models/blogPost')

function indexRoute(req, res) {
  BlogPost
    .find()
    .populate([
      { path: 'author', select: 'username' },
      { path: 'comments.author', select: 'username' }
    ])
    .then(blogPosts => res.json(blogPosts))
}

function createRoute(req, res) {
  BlogPost.create(req.body)
    .then(post => res.status(201).json(post))
}

module.exports = {
  index: indexRoute,
  create: createRoute
}
