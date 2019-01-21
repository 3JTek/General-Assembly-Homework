import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home'
import WinesIndex from './components/WinesIndex'
import WinesShow from './components/WinesShow'
import NavBar from './components/NavBar'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <NavBar />

          <Switch>
            <Route path='/wines/:id' component={WinesShow} />
            <Route path='/wines' component={WinesIndex} />
            <Route path='/' component={Home} />
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
