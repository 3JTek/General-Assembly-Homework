import React from 'react'
import axios from 'axios'

import blogCard from './blogCard'

class blogsIndex extends React.Component {

  constructor() {
    super()

    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/blogs')
      .then(res => this.setState({ blogs: res.data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.blogs.map(blog =>
              <div className="column is-one-quarter" key={blog._id}>
                <blogCard {...blog} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default blogsIndex
