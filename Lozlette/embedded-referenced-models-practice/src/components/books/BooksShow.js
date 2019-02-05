import React from 'react'
import axios from 'axios'

class BooksShow extends React.Component {

  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => this.setState({ book: res.data }))
  }

  render() {
    if(!this.state.book) return null
    const { title, image, description } = this.state.book
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{title}</h1>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={title} />
              </figure>
            </div>

            <div className="column">
              <h4 className="title is-4">Description</h4>
              <p>{description}</p>
              <hr />
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default BooksShow
