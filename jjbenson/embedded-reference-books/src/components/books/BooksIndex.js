import React from 'react'
import axios from 'axios'

// import WineCard from './WineCard'

class BooksIndex extends React.Component{

  constructor(){
    super()

    this.state={}
  }

  componentDidMount(){
    axios.get('/api/books')
      .then((res)=>{
        this.setState({ books: res.data})
      })
  }

  render(){
    if(!this.state.books) return null
    console.log(this.state.books)
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Book List</h1>
          <hr />
          <div className="columns is-multiline">
            {
              this.state.books.map((book)=>
                <a href={`/books/${book._id}`}  className='column is-one-quarter' key={book._id}>
                  <h3 className='level-item title is-4'>{book.title}</h3>

                  <h4 className='level-item is-5'>{
                    `by: ${book.author.name}`
                  }</h4>
                  <h4 className='level-item is-5'>{
                    `series: ${book.series.name}`
                  }</h4>

                  <h4 className="level-item">
                    {(book.review >=0)&& '⭐️'}
                    {(book.review >1)&& '⭐️'}
                    {(book.review >2)&& '⭐️'}
                    {(book.review >3)&& '⭐️'}
                    {(book.review >4)&& '⭐️'}
                  </h4>
                  <hr />
                  <figure className="image">
                    <img src={book.image} alt={book.title} />
                  </figure>
                </a>
              )
            }
          </div>
        </div>
      </section>

    )
  }

}

export default BooksIndex
