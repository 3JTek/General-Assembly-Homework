import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

class PostsIndex extends React.Component{
  constructor(){
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/blog')
      .then(res => this.setState({ blogPosts: res.data }))
  }

  render(){
    if(!this.state.blogPosts) return null
    return(
      <div>
        <h2>Posts Index</h2>
        {this.state.blogPosts.map((post, index) =>
          <div key={index}>
            <Link to={`/api/blog/${post._id}`}>
              <h3>{post.title}</h3>
              <p>This post has {post.comments.length} Comments</p>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default PostsIndex
