import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import 'bulma'
import './style.scss'

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
      <div>
        <header>
          <h1 className="title is-1">WineBored</h1>
        </header>
        <main>
          {this.state.wines.map(wine =>
            <h2 className="subtitle" key={wine._id}>{wine.name}</h2>
          )}
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
