import React from 'react'
import ReactDOM from 'react-dom'




class App extends React.Component {
  constructor(){
    super()

    this.state = {
      computerChoice: '',
      playerChoice: '',
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

    this.handleChoice = this.handleChoice.bind(this)
    this.computerChoice = this.computerChoice.bind(this)
    this.winLogic = this.winLogic.bind(this)

  }

  handleChoice(e){
    console.log(e.target.value)
    console.log(this.computerChoice())
    this.setState({playerChoice: e.target.value})
    this.setState({computerChoice: this.computerChoice()})
    console.log(this.winLogic())
  }

  computerChoice(){
    return this.state.options[Math.floor(Math.random() * (this.state.options.length))]
  }

  winLogic() {
    if(this.state.playerChoice === this.state.computerChoice) return 'Tie'
    if(this.state.winConditions[this.state.playerChoice] === this.state.computerChoice) return 'You win'
    return 'You lose'
  }



  render() {
    return(
      <div>
        <div>
          <h1>Rock, Paper, Scissors</h1>
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
