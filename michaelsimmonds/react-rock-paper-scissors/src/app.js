import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

import ButtonOne from './components/ButtonOne.js'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      win: {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper'
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
    this.setState({ player: player})
    const comp = this.choices[Math.floor(Math.random() * this.choices.length)]
    this.setState({ comp: comp})
    const result = this.winnerLogic(player, comp)
    this.setState({ outcome: result})
  }

  winnerLogic(player, comp) {
    if(player === comp) return 'You drew'
    if(this.state.win[player] === comp) return 'You won'
    else return 'You lost'
  }


  render() {
    return (
      <div>
        <ButtonOne handleClick={this.handleClick}/>
        <h1>Player Chooses:</h1>
        <h2>{this.state.player}</h2>
        <h1>Computer Chooses:</h1>
        <h2>{this.state.comp}</h2>
        <h1>{this.state.outcome}</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
