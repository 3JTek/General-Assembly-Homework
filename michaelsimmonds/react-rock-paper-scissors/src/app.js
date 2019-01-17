import React from 'react'
import ReactDOM from 'react-dom'

import ButtonOne from './components/ButtonOne.js'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      win: {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      },
      player: '',
      comp: '',
      outcome: ''
    }
    this.choices = Object.keys(this.state.win)

    this.handleClick = this.handleClick.bind(this)
    this.winnerLogic = this.winnerLogic.bind(this)
  }


  handleClick(e) {
    e.preventDefault()
    const player = e.target.value
    console.log(player)
    this.setState({ player: player})
    const comp = this.choices[Math.floor(Math.random() * this.choices.length)]
    console.log(comp)
    this.setState({ comp: comp})
    const winner = this.winnerLogic(player, comp)
    console.log(winner)
  }

  winnerLogic(player, comp) {
    if(player === comp) return 'tie'
    if(this.state.win[player] === comp) return 'win'
    else return 'lose'
  }


  render() {
    return (
      <div>
        <ButtonOne handleClick={this.handleClick}/>
        <h1>Player Chooses:</h1>
        <h2>{this.state.player}</h2>
        <h1>Computer Chooses:</h1>
        <h2>{this.state.comp}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
