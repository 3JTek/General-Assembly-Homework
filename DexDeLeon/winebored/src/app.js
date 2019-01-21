import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Header from './components/Header'
import Home from './components/Home'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      wines: []
    }
  }

  componentDidMount(){
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({ wines: res.data }))
      .catch(error => console.error('ERROR', error))
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
