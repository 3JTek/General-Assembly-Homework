import React from 'react'
import ReactDOM from 'react-dom'


import './style.scss'
import Buttons from './components/Buttons'


class App extends React.Component {
  constructor() {
    super()


    this.state = {
      winConditions: {
        Rock: 'scissors',
        Paper: 'rock',
        Scissors: 'paper'
      },

      choices: this.Object.keys(this.winConditions)  
    }

    this.makeChoice = this.makeChoice.bind(this)
    this.clickButton = this.clickButton.bind(this)
  }


  makeChoice() {
    const randomChoice = this.choices[Math.floor(Math.random() * this.choices.length)]
    console.log(randomChoice)
  }

  clickButton(){
    console.log('working')

  }




  render(){
    return (
      <div>
        <Buttons clickButton={this.clickButton} makeChoice={this.makeChoice}/>
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
