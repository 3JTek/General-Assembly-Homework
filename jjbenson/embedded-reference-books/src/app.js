import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/common/header'
import BooksShow from './components/books/BooksShow'
import BooksIndex from './components/books/BooksIndex'
import Home from './components/Home'


import './style.scss'

class App extends React.Component {

  render(){
    return(
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Route path="/books/:id" component={BooksShow} />
            <Route path="/books" component={BooksIndex} />
            <Route path="/" component={Home} />
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
