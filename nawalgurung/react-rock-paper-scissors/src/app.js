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
      playerChoice: '',
      computerChoices: '' ,
      outcome: ''
    }

    this.handleEvent = this.handleEvent.bind(this)
    this.handleGameLogic = this.handleGameLogic.bind(this)
    this.choices = Object.keys(this.state.winConditions)
  }

  handleEvent(e){
    const player =  e.target.value
    console.log(player)
    this.setState({playerChoice: player})

    const computer = this.choices[Math.floor(Math.random() * this.choices.length)]
    console.log(computer)
    this.setState({computerChoices: computer})

    const winner = this.handleGameLogic(player, computer)
    console.log(winner)
    this.setState({outcome: winner})
  }

  handleGameLogic(player, computer){

    if(player === computer)return 'Tie'
    if(this.state.winConditions[player] === computer)return 'You Win'
    else return 'You Lose'
  }


  render() {
    return(

      <main>
        <h2> Player: {this.state.playerChoice} </h2>
        <h2> Computer: {this.state.computerChoices} </h2>
        <Buttons handleEvent={this.handleEvent}  />
        <h2> Outcome: {this.state.outcome} </h2>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
