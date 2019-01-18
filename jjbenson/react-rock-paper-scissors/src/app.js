import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Buttons from './components/ButtonsHolder'

class App extends React.Component{

  constructor(){
    super()


    this.state = {
      //Object to hold all game data
      gameData: {
        player: null,
        cpu: null,
        winner: 'Get Ready!'
      },

      //Object to hold cpu/logic data
      cpuData: {
        //choices added from keys in constructor
        choices: null,
        beats: {
          Rock: ['Scissors', 'Lizard'],
          Paper: ['Spock','Rock'],
          Scissors: ['Paper','Lizard'],
          Lizard: ['Spock','Paper'],
          Spock: ['Rock','Scissors']
        }
      },

      //Object to pass data to buttons
      buttonData: {
        //choices added from keys in constructor
        choices: null,
        //Pass the function as a property
        handleClick: this.handleClick,
        handleReset: this.handleReset
      }
    }

    //Work out the choices from the keys of the beats object
    const beats = this.state.cpuData.beats
    const choices =  Object.keys(beats)

    //Set the state directly (Because this is in constructor?)
    this.state.buttonData.choices=choices
    this.state.cpuData.choices=choices

    //Bind the click!
    this.state.buttonData.handleClick = this.state.buttonData.handleClick.bind(this)

    this.state.buttonData.handleReset = this.state.buttonData.handleReset.bind(this)
  }

  //Method that returns an object containing the choice and what it beats.
  //Would be easier if objects could be referenced by index!
  getCpuObj(){
    const {choices, beats} = this.state.cpuData
    //Use choices length to see how many choices there are
    const cpu = Math.floor(Math.random()*choices.length)
    const cpuChoice = choices[cpu]
    return {choice: cpuChoice,beats: beats[cpuChoice]}
  }

  //Method returns a string saying who won.
  getWinner(playerChoice, cpuObj){
    return (playerChoice === cpuObj.choice)? 'Draw'
      :(cpuObj.beats.includes(playerChoice))? 'Cpu Wins':' Player Wins'
  }

  handleReset(){
    const newGameData = {
      player: null,
      cpu: null,
      winner: 'Get ready!'
    }

    //Update the state
    this.setState({gameData: newGameData})
  }


  //Method to handle button clicks
  handleClick({target: {value}}){
    //Use pChoice instead of value for readability
    const pChoice = value

    //Get the cpu choice and what it beats as an object
    const cpuObj = this.getCpuObj()

    //Work out the winner and get the string
    const winnerString = this.getWinner(pChoice,cpuObj)

    //Build an object of the new gameData
    const newGameData = {
      player: pChoice,
      cpu: cpuObj.choice,
      winner: winnerString
    }

    //Update the state
    this.setState({gameData: newGameData})
  }


  render(){
    //Pull out variables
    const {player, cpu, winner} = this.state.gameData
    return(
      <div className="container">
        <header>
          <h1>Rock Paper Scissors</h1>
        </header>
        {/*Main could be a separate component and we could pass gameData in like the Buttons*/}
        <main>
          <div className='choices'>
            <div className="choice">
              Player
              <div className={'image '+player}>{player}</div>
            </div>
            <div className="">VS</div>
            <div className="choice">
              CPU
              <div className={'image '+cpu}>{cpu}</div>
            </div>
          </div>
          <div className={'winner ' + winner}>
            <h3>{winner}</h3>
          </div>
          <Buttons {...this.state.buttonData} />
        </main>
        <footer>
          <p>Made with ♥️ @ GA</p>
        </footer>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
