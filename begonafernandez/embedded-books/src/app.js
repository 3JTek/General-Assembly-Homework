import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BooksIndex from './components/BooksIndex'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route path="/books" component={BooksIndex} />
            <Route path="/" component={Hero} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
