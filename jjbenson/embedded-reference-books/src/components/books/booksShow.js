import React from 'react'
import axios from 'axios'

// import Auth from '../../lib/Auth'


// import WineEdit from './WineEdit'
// import Map from '../Map'

// import Auth from '../../lib/Auth'


class BookShow extends React.Component{

  constructor(){
    super()
    this.state = {
      // showMap: false
    }


    // this.handleDelete = this.handleDelete.bind(this)
    // this.handleEdit = this.handleEdit.bind(this)
  }

  // handleEdit(){
  //   this.props.history.push(`/books/${this.props.match.params.id}/edit`)
  // }
  //
  // handleDelete(){
  //   axios.delete(`https://winebored.herokuapp.com/books/${this.props.match.params.id}`, { headers: { Authorization: `Bearer ${ Auth.getToken() }` } })
  //     .then( () => this.props.history.push('/books') )
  //     .catch((err)=>console.log(err.message))
  // }


  //Get country data from REST Countries (we only need the flag)
  // getCountryData(){
  //   axios.get('https://restcountries.eu/rest/v2/name/'+this.state.books[0].origin)
  //     .then(res => {
  //
  //       this.setState( {countryData: res.data[0]})
  //     })
  //     .catch((err)=>{
  //       console.log(err.message)
  //       this.setState( {countryData: { continue: true }})
  //     })
  // }

  //Get data from WineBored
  getBookData(){
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then( res =>{
        this.setState({ book: res.data})
      })
      .catch((err)=>console.log(err.message))
  }

  componentDidMount(){
    this.getBookData()
  }

  render(){
    if(!this.state.book) return null
    console.log(this.state.book)
    const {
      title,
      image,
      author: {name: author},
      series: {
        name: series,
        books: inTheSeries
      },
      quotes
    } = this.state.book
    console.log(inTheSeries)
    return(
      <section className="section">
        <article className="container">
          <h1 className="level-item title is-1">{title}</h1>
          <hr />
          <div className='level'>
            <h6 className="level-item is-6">{'Author:'}&nbsp;<strong>{author}</strong></h6>
            <h6 className="level-item is-6">{'Series:'}&nbsp;<strong>{series}</strong></h6>
          </div>
          <hr />
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
              <hr />
              <h3 className="level-item title is-4 underline">Others in this series</h3>
              {inTheSeries.map( (book,i)=>{
                if (book._id === this.state.book._id) return null
                return <h4 key={i} className="level-item is-6">
                  <a href={`/books/${book._id}`}>
                    {book.title}
                  </a>
                </h4>
              }
              )}
            </div>
            <div className="column">
              <div className="content">
                <h2 className="level-item">Quotes</h2>
                {quotes.map((quote, i)=>
                  <blockquote key={i}>{quote.text}</blockquote>
                )}
              </div>
            </div>
          </div>
        </article>
      </section>
    )
  }
}

export default BookShow
