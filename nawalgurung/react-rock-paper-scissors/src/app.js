import React from 'react'
import ReactDOM from 'react-dom'
import Buttons from './components/Buttons'
// import Display from './components/Display'

class App extends React.Component {
  constructor() {
    super()

    this.state ={
      winConditions: {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      },
      computerChoices: '' ,
      playerChoice: '',
      outcome: '',
      playerWin: null,
      computerWin: null
    }

    this.handleEvent = this.handleEvent.bind(this)
    this.handleGameLogic = this.handleGameLogic.bind(this)
    this.reset = this.reset.bind(this)
    this.choices = Object.keys(this.state.winConditions)
  }

  handleEvent(e){
    const player =  e.target.value
    this.setState({playerChoice: player})

    const computer = this.choices[Math.floor(Math.random() * this.choices.length)] //choices is an array [rock, paper, scissors]
    this.setState({computerChoices: computer})

    const winner = this.handleGameLogic(player, computer)
    this.setState({outcome: winner})
  }

  handleGameLogic(player, computer){
    let playerWin = this.state.playerWin
    let computerWin = this.state.computerWin

    if(player === computer)return 'Tie'
    if(this.state.winConditions[player] === computer){
      this.setState({playerWin: playerWin+=1 })
      return 'You Win'
    } else {
      this.setState({computerWin: computerWin+=1 })
      return 'You Lose'
    }
  }

  reset(){
    this.setState({
      computerChoices: '',
      playerChoice: '',
      outcome: '',
      playerWin: 0,
      computerWin: 0
    })
  }

  render() {
    return(

      <main>
        <h2> Player: {this.state.playerChoice} </h2>
        <h2> Computer: {this.state.computerChoices} </h2>
        <Buttons handleEvent={this.handleEvent} reset={this.reset} />
        <h2> Outcome: {this.state.outcome} </h2>
        <h4> Player Wins: {this.state.playerWin} </h4>
        <h4> Comp Wins: {this.state.computerWin} </h4>
      </main>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
