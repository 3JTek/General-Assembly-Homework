import React from 'react'
import ReactDOM from 'react-dom'

import Buttons from './components/Buttons'

import './style.scss'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      youChose: '',
      computerChose: 'Rock',
      winner: 'Someone Won'
    }
    this.humanChoice = this.humanChoice.bind(this)
  }

  humanChoice(e) {
    console.log(e.target.innerText)
    this.setState({youChose: e.target.innerText})
  }

  computerChoice() {
    
  }

  render() {
    return (
      <main>
        <h1>Rock, paper, scissors</h1>
        <Buttons humanChoice={this.humanChoice} />
      </main>
    )
  }

}





ReactDOM.render(
  <App />,
  document.getElementById('root')
)
