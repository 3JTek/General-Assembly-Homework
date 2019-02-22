import React from 'react'
import axios from 'axios'

import BookCard from './BookCard'

class BooksIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get('/api/books')
      .then(res => this.setState({ books: res.data }))
  }

  render() {
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">My books</h1>
          <div className="columns is-multiline">
            {this.state.books.map(book =>
              <div className="column is-one-quarter" key={book._id}>
                <BookCard {...book}/>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default BooksIndex
