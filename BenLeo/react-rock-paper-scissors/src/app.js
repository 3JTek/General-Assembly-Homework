import React from 'react'
import ReactDOM from 'react-dom'

import Buttons from './components/Buttons'
import DrawResults from './components/DrawResults'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      moves: ['rock', 'paper', 'scissors'],
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
    this.setState({ cpuChoice: nextCpuChoice}, () => {
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

        <DrawResults
          playerChoice={this.state.playerChoice}
          cpuChoice={this.state.cpuChoice}
          winnerText={this.state.winnerText}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
