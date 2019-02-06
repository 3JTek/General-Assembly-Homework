import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './style.scss'

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import BooksIndex from './components/books/BooksIndex'
import BooksShow from './components/books/BooksShow'

class App extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  componentDidMount(){
    axios.get('/api/books')
      .then(response => this.setState({ books: response.data }))

  }



  render(){
    if(!this.state.books)return null
    console.log(this.state)
    return(
      <BrowserRouter>
        <main>
          <nav className="links">
            <Link to="/books" className="link">Books Index</Link>
          </nav>
          <Switch>
            <Route path="/books/:id" component={BooksShow} />
            <Route path="/books" component={BooksIndex} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
