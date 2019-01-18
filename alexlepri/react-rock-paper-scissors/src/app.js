import React from 'react'
import ReactDOM from 'react-dom'

import Button from './components/Button'
import './style.scss'

class App extends React.Component {
  constructor(){
    super()


    this.state = {
      winConditions: {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      },
      computer: '',
      player: ''
    }

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(e){
    // console.log('im a button')
    const choices = ['rock','paper','scissors']//Object.keys(this.winConditions)
    const computer = choices[Math.floor(Math.random() * choices.length)]

    if(e.target.value === computer) //console.log( 'Tie')
      if(this.state.player === computer) //console.log( 'You win')
        //console.log( 'You lose')
        this.setState({ player: e.target.value, computer: computer })
  }



  render() {
    return (

      <div>
        <Button handleClick={this.handleClick} reset={this.reset} />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
