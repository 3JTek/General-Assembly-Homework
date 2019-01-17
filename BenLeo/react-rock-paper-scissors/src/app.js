import React from 'react'
import ReactDOM from 'react-dom'

import Buttons from './components/Buttons'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      moves: [
        {
          name: 'rock',
          wins: 'scissors',
          loses: 'paper'
        },

        {
          name: 'paper',
          wins: 'rock',
          loses: 'scissors'
        },

        {
          name: 'scissors',
          wins: 'paper',
          loses: 'rock'
        }
      ],
      winConditions: {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      },
      playerChoice: '',
      cpuChoice: '',
      winnerText: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.makeCpuChoice = this.makeCpuChoice.bind(this)
    this.checkForWin=this.checkForWin.bind(this)

  }

  checkForWin() {
    if(this.state.playerChoice === this.state.cpuChoice) return this.setState({ winnerText: 'The result is a tie' })
    if(this.state.winConditions[this.state.playerChoice] === this.state.cpuChoice) return this.setState({ winnerText: 'You win!' })
    if(this.state.winConditions[this.state.cpuChoice] === this.state.playerChoice) return this.setState({ winnerText: 'You lose!' })
  }

  makeCpuChoice() {
    const nextCpuChoice = this.state.moves[Math.floor((Math.random() * this.state.moves.length))]
    this.setState({ cpuChoice: nextCpuChoice.name}, () => {
      this.checkForWin()
    })
  }

  handleClick(e) {
    this.setState({ playerChoice: e.target.innerText })
    this.makeCpuChoice()
  }

  render() {
    return(
      <div>
        <Buttons
          moves={this.state.moves}
          handleClick={this.handleClick}
        />
        <h1 id="player">Player Choice: {this.state.playerChoice}</h1>
        <h1 id="cpu">Computer Choice: {this.state.cpuChoice}</h1>
        <h1 id="winner">{this.state.winnerText}</h1>


      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
