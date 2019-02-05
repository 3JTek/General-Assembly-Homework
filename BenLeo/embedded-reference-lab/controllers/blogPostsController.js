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

module.exports = {
  index: indexRoute
}
