const Blog = require('../models/blog')

function indexRoute(req, res) {
  Blog
    .find()
    .then(blogs => res.json(blogs))
}

function showRoute(req, res) {
  Blog
    .findById(req.params.id)
    .then(blog => res.json(blog))
}

function commentCreateRoute(req, res) {
  req.body.user = req.currentUser
  Blog
    .findById(req.params.id)
    .then(blog => {
      blog.comments.push(req.body)
      return blog.save()
    })
    .then(blog => res.status(201).json(blog))
}


module.exports = {
  index: indexRoute,
  show: showRoute,
  commentCreate: commentCreateRoute
}
