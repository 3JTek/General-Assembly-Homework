import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Choices from './component/Choices'
import Winner from './component/Winner'
import Buttons from './component/Buttons'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      computerChoice: null,
      playerChoice: null,
      options: [
        'rock',
        'paper',
        'scissors'
      ],
      winConditions: {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      },
      winner: null
    }

    this.computerChoice = this.computerChoice.bind(this)
    this.handleChoice = this.handleChoice.bind(this)
    this.winnerLogic = this.winnerLogic.bind(this)

  }

  handleChoice(e) {
    this.setState({playerChoice: e.target.value,computerChoice: this.computerChoice()}, () => {
      this.setState({winner: this.winnerLogic()})
    })
  }

  computerChoice(){
    return this.state.options[Math.floor(Math.random() * (this.state.options.length))]
  }


  winnerLogic() {
    if(this.state.computerChoice){
      if(this.state.playerChoice === this.state.computerChoice) return 'You are tied!'
      if(this.state.winConditions[this.state.playerChoice] === this.state.computerChoice) return 'You Win'
      return 'Computer Wins'
    }
  }

  render(){
    return(
      <div>
        <div>
          <h1> Rock, Paper, Scissors</h1>
        </div>
        <Choices
          playerChoice={this.state.playerChoice}
          computerChoice={this.state.computerChoice}
        />
        <Buttons handleChoice={this.handleChoice}/>
        <Winner winner={this.state.winner} />
      </div>
    )

  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
