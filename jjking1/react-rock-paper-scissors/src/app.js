import React from 'react'
import ReactDOM from 'react-dom'

import ChoicesButtons from './components/ChoicesButtons'
import Display from './components/Display'

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      winConditions: {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      },
      currentResult: '',
      userChoice: 'Your Choice',
      cpuChoice: 'Cpu Choice',
      cpuScore: 0,
      userScore: 0
      }

    this.handleCombat = this.handleCombat.bind(this)
  }




  handleCombat(e){
    const conditions = this.state.winConditions
    const choices = Object.keys(this.state.winConditions)
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)]

    this.setState({userChoice: e.target.value, cpuChoice: cpuChoice})
    if(e.target.value === cpuChoice) this.setState({currentResult: 'Tie'})
    else if(conditions[cpuChoice] === e.target.value) this.setState({
      currentResult: 'You lose',
      cpuScore: this.state.cpuScore+1
    })
    else this.setState({
      currentResult: 'You Win',
      userScore: this.state.userScore+1
    })
  }




  render(){

    return(
      <div>
        {this.state.userChoice && this.state.cpuChoice && this.state.currentResult &&
          <div>
            < Display userChoice={this.state.userChoice} cpuChoice={this.state.cpuChoice}
              currentResult={this.state.currentResult} cpuScore={this.state.cpuScore}
              userScore={this.state.userScore}
            />
          </div>
        }
        <ChoicesButtons
          handleCombat={this.handleCombat}
        />
      </div>
    )
  }


}





ReactDOM.render(<App />, document.getElementById('root'))
