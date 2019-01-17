import React from 'react'
import ReactDOM from 'react-dom'

import Buttons from './components/Buttons'
import WinnerZone from './components/WinnerZone'

import './style.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      youChose: '',
      computerChose: '',
      winner: '',
      options: ['Rock', 'Paper', 'Scissors'],
      winConditions: {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper'
      }
    }
    this.humanChoice = this.humanChoice.bind(this)
    this.computerChoice = this.computerChoice.bind(this)
    this.whoWon = this.whoWon.bind(this)
  }

  humanChoice(e) {
    console.log(e.target.innerText)
    this.setState({youChose: e.target.innerText})
    this.computerChoice()

  }

  computerChoice() {
    const randomIdx = Math.floor(Math.random() * Math.floor(3))
    const compChose = this.state.options[randomIdx]
    this.setState({computerChose: compChose})
    console.log(compChose)
    this.whoWon()
  }

  whoWon() {
    let winner = ''
    const {compChose, youChose} = this.state
    if (compChose === youChose) {
      winner = 'No one'
    } else if (this.state.winConditions[youChose] === compChose) {
      winner = 'You'
    } else {
      winner = 'Computer'
    }
    this.setState({winner: winner})
    console.log(winner + ' has won!')
  }



  render() {
    return (
      <main>
        <h1>Rock, paper, scissors</h1>
        <p>Computer chose: {this.state.computerChose}</p>
        <p>You chose: {this.state.youChose}</p>
        <Buttons humanChoice={this.humanChoice} />
        <WinnerZone winner={this.state.winner} />
      </main>
    )
  }

}





ReactDOM.render(
  <App />,
  document.getElementById('root')
)
