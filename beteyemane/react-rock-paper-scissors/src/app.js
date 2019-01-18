import React from 'react'
import ReactDOM from 'react-dom'
import Buttons from './components/Buttons'
import './style.scss'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      wins: {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper'
      },

      computerChoice: '',
      playersChoice: '',
      outcomes: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.findWinner = this.findWinner.bind(this)
    this.choices = Object.keys(this.state.wins)

  }

  handleSubmit(e) {
    const computer = this.choices[Math.floor(Math.random() * 3)]
    this.setState({computer})
    const player = e.target.value
    this.setState({player})
    const winner = this.findWinner(player, computer)
    this.setState({outcome: winner})
  }

  findWinner(player, computer) {
    if(player === computer) return 'It\'s a Tie!'
    if(this.state.wins[player] === computer) return 'You win!'
    return 'You lose :('
  }

  render() {
    return (
      <div>
        <Buttons handleSubmit={this.handleSubmit}/>
        <h1>You chose: {this.state.player}</h1>
        <h1>Computer chose: {this.state.computer}</h1>
        <h1>{this.state.outcome}</h1>
      </div>
    )
  }
}


ReactDOM.render( <App />, document.getElementById('root'))
