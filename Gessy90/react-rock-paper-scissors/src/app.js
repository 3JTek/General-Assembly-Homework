import React from 'react'
import ReactDOM from 'react-dom'

import Buttons from './components/Buttons'
import './style.scss'

class App extends React.Component {
  constructor(){
    super()

  }
  theWinner(e) {
      console.log(e.target.value)
    if(player1Choice === player2Choice) return 'Tie'
    if(this.winConditions[player1Choice] === player2Choice) return 'You win'
    return 'You lose'
    this.setState({e.target.value})
  }

  handleClick(){
    console.log('im a button')
  }


  render(){
    return (
      <main>
        <div>
          <Buttons handleClick={this.handleClick} />

        </div>
      </main>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
