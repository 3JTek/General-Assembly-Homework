import React from 'react'
import ReactDOM from 'react-dom'

import Buttons from './components/Buttons'
import './style.scss'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      computerChoice: null,
      playerChoice: null,
      winner: null,
      options: [
        'rock',
        'paper',
        'scissors'
      ],
      winConditions: {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      }
    }

    this.computerChoice = this.computerChoice.bind(this)
    this.handleChoice = this.handleChoice.bind(this)
    this.winnerLogic = this.winnerLogic.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  handleChoice(e) {
    this.setState({playerChoice: e.target.value, computerChoice: this.computerChoice()}, () => {
      console.log(this.state.playerChoice)
      console.log(this.state.computerChoice)
      console.log(this.winnerLogic())
      this.setState({winner: this.winnerLogic()})
    })
  }

  computerChoice(){
    return this.state.options[Math.floor(Math.random() * (this.state.options.length))]

  }

  resetGame(){
    console.log('reset')
    this.setState({playerChoice: null, computerChoice: null, winner: null})
  }

  winnerLogic() {
    if(this.state.computerChoice){
      if(this.state.playerChoice === this.state.computerChoice) return 'It\'s Tie'
      if(this.state.winConditions[this.state.playerChoice] === this.state.computerChoice) return 'You beat the computer'
      return 'You lost unfortunately'
    }
  }

  render(){
    return(
      <div className="container">
        <div className="display">
          <h1>Rock, Paper, Scissors</h1>
          <h2>Player picked {this.state.playerChoice}</h2>
          <h2>Computer picked {this.state.computerChoice}</h2>
          <h2>{this.state.winner}</h2>
        </div>

        <Buttons handleChoice={this.handleChoice} resetGame={this.resetGame}/>

      </div>
    )

  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
