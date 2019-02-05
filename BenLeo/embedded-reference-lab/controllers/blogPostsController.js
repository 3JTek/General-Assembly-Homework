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

function commentCreateRoute(req, res) {
  req.body.author = req.currentUser
  BlogPost
    .findById(req.params.id)
    .then(post => {
      post.comments.push(req.body)
      return post.save()
    })
    .then(post => res.status(201).json(post))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  commentCreate: commentCreateRoute
}
