import React from 'react'
import ReactDOM from 'react-dom'

import Button from './components/Buttons.js'
import Players from './components/PlayerChoices.js'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      names: ['rock', 'paper', 'scissors'],

      winConditions: {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      },

      player1Choice: '',
      computerChoice: '',
      winner: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }


  findWinner(player1 ,choice){
    if(player1 === choice) return 'Tie'
    if(this.state.winConditions[player1] === choice){
      return 'Player1'
    } else  return 'CPU'

  }

  handleClick(e){
    const choice = this.state.names[Math.floor(Math.random() * this.state.names.length)]
    const winner = this.findWinner(e.target.value, choice)
    this.setState({ player1Choice: e.target.value, computerChoice: choice, winner: winner })
  }

  render() {
    return (
      <div>
        {this.state.names.map((name, index) => <Button key={index} name={name} handleClick={this.handleClick}/>)}
        <Players title="Player" text={this.state.player1Choice}/>
        <Players title="CPU" text={this.state.computerChoice}/>
        <Players title="Winner" text={this.state.winner} wins/>
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
