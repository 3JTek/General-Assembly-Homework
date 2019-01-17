import React from 'react'
import ReactDOM from 'react-dom'
import Buttons from './components/Buttons'

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
    console.log(computer)
    this.setState({computer})
    const player = e.target.value
    console.log(player)
    this.setState({player})
    const winner = this.findWinner(player, computer)
    console.log(winner)
    e.preventDefault()
    this.setState({outcome: winner})
  }

  findWinner(player, computer) {
    if(player === computer) return 'Tie'
    if(this.state.wins[player] === computer) return 'Win'
    return 'Lose'
  }

  render() {
    return (
      <div>
        <Buttons handleSubmit={this.handleSubmit}/>
        <h1>Players Choice: {this.state.player}</h1>
        <h1>Computers Choice: {this.state.computer}</h1>
        <h1>Outcome: {this.state.outcome}</h1>
      </div>
    )
  }
}


ReactDOM.render( <App />, document.getElementById('root'))
