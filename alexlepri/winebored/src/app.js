import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'




import WinesIndex from './components/WinesIndex'
import Home from './components/Home'
import WinesShow from './components/WinesShow'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <nav>
            <Link to="/"> Home </Link>
            <Link to="/wines"> Wines Index </Link>
          </nav>

          <Switch>
            <Route path="/wines/:id" component={WinesShow} />
            <Route path="/wines" component={WinesIndex}/>
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
