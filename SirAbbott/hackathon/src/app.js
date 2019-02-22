import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch} from 'react-router-dom'

import './style.scss'

import Game from './components/Game'
import Home from './components/Home'
import Navbar from './components/common/Navbar'
import GameOver from './components/GameOver'

class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route path="/game/gameover" component={GameOver} />
            <Route path="/game" component={Game} />
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
