import React from 'react'
import ReactDOM from 'react-dom'


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
  }

  handleChoice(e) {
    this.setState({playerChoice: e.target.value, computerChoice: this.computerChoice()}, () => {
      console.log(this.state.playerChoice)
      console.log(this.state.computerChoice)
      console.log(this.winnerLogic())

    })
  }

  computerChoice(){
    return this.state.options[Math.floor(Math.random() * (this.state.options.length))]

  }


  winnerLogic() {
    if(this.state.computerChoice){
      if(this.state.playerChoice === this.state.computerChoice) return 'Tie'
      if(this.state.winConditions[this.state.playerChoice] === this.state.computerChoice) return 'You win'
      return 'You lose'
    }
  }




  render(){
    return(
      <div>
        <div>
          <h1> Rock, Paper, Scissors</h1>
          <h2></h2>
        </div>
        <div>
          <button value="rock" onClick={this.handleChoice}>Rock</button>
          <button value="paper" onClick={this.handleChoice}>Paper</button>
          <button value="scissors" onClick={this.handleChoice}>Scissors</button>

        </div>
      </div>
    )

  }

}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
