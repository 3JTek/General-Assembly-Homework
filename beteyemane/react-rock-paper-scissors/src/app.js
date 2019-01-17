import React from 'react'
import ReactDOM from 'react-dom'
import Buttons from './components/Buttons'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      wins: {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.choices = Object.keys(this.state.wins)
    console.log(this.choices)

  }

  handleSubmit(e) {
    const random = [Math.floor(Math.random() * 3)]
    e.preventDefault()
    console.log(e.target.value)
    console.log(random)
  }

  render() {
    return (
      <Buttons handleSubmit={this.handleSubmit}/>
    )
  }
}


ReactDOM.render( <App />, document.getElementById('root'))
