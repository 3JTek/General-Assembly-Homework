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
      },

      computerChoice: '',
      playersChoice: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.choices = Object.keys(this.state.wins)
    console.log(this.choices)

  }

  handleSubmit(e) {
    const random = this.choices[Math.floor(Math.random() * 3)]
    this.setState({computerChoice: random})
    this.setState({playersChoice: e.target.value})
    e.preventDefault()
    console.log(e.target.value)
    console.log(random)
  }

  render() {
    return (
      <div>
        <Buttons handleSubmit={this.handleSubmit}/>
        <h1>Players Choice: {this.state.playersChoice}</h1>
        <h1>Computers Choice: {this.state.computerChoice}</h1>
      </div>
    )
  }
}


ReactDOM.render( <App />, document.getElementById('root'))
