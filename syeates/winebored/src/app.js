import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/wines">wines Index</Link>
          </nav>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,


  document.getElementById('root')
)
