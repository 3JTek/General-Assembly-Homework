import React from 'react'
import ReactDom from 'react-dom'

import Button from './components/Button.js'

import './style.scss'

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      //rock: ['scissors','lizard'],
      //paper: ['rock', 'spock'],
      //scissors: ['paper','lizard'],
      //lizard: ['paper','spock'],
      //spock: ['rock', 'scissor']
      player: '',
      computer: ''
    }
    this.handelEvent = this.handelEvent.bind(this)
    this.makeChoice = this.makeChoice.bind(this)

  }

  makeChoice() {
    return Math.floor(Math.random() * 5)
  }

  handelEvent(e){
    const eventValue = e.target.textContent
    console.log(eventValue)
    console.log(this.makeChoice())
    this.setState({player: eventValue})
  }

  render(){
    return(
      <div>
        <h1>Rock Paper Siccior</h1>
        <Button
          handelEvent={this.handelEvent}
        />
      </div>
    )
  }
}


ReactDom.render(<App  />, document.querySelector('#root'))
