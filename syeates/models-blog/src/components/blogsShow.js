import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

class blogsShow extends React.Component {

  constructor() {
    super()

    this.state = {}

  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/blogs/${this.props.match.params.id}`)
      .then(res => this.setState({ blog: res.data }))
  }


  render() {
    if(!this.state.blog) return null
    const { title, date, text, image } = this.state.blog
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{title}</h1>
          <h2 className="subtitle is-2">{date}</h2>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={title} />
              </figure>
            </div>

            <div className="column">
              <h4 className="title is-4">Notes</h4>
              <p>{text}</p>
              <hr />
              <Link to={'/blogs'} className="button is-primary">Back</Link>
            </div>
          </div>

        </div>
      </section>
    )
  }
}


export default blogsShow
