import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      buttons: ['rock', 'paper', 'scissors'],
      winConditions: {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      }
    }
  }


  render() {
    return (
      null
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
