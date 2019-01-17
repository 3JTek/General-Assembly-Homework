import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Buttons from './components/ButtonsHolder'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      gameData: {
        player: null,
        cpu: null,
        winner: 'Get Ready!'
      },
      cpuData: {
        choices: null,
        beats: {
          Rock: ['Scissors', 'Lizard'],
          Paper: ['Spock','Rock'],
          Scissors: ['Paper','Lizard'],
          Lizard: ['Spock','Paper'],
          Spock: ['Rock','Scissors']
        }
      },
      buttonData: {
        choices: null,
        handleClick: this.handleClick
      }
    }

    const beats = this.state.cpuData.beats
    const choices =  Object.keys(beats)

    this.state.buttonData.choices=choices
    this.state.cpuData.choices=choices

    this.state.buttonData.handleClick = this.state.buttonData.handleClick.bind(this)
  }

  getCpuObj(){
    const {choices, beats} = this.state.cpuData
    //Use choices length to see how many choices there are
    const cpu = Math.floor(Math.random()*choices.length)
    const cpuCh = choices[cpu]
    return {choice: cpuCh,beats: beats[cpuCh]}
  }

  getWinner(playerChoice, cpuObj){
    console.log(cpuObj)
    return (playerChoice === cpuObj.choice)? 'Draw'
      :(cpuObj.beats.includes(playerChoice))? 'Cpu Wins':' Player Wins'
  }

  handleClick({target: {value}}){
    const pChoice = value
    const cpuObj = this.getCpuObj()
    const winner = this.getWinner(pChoice,cpuObj)

    const gameData = {
      player: pChoice,
      cpu: cpuObj.choice,
      winner: winner
    }
    this.setState({gameData: gameData})
  }


  render(){
    const {player, cpu, winner} = this.state.gameData
    return(
      <div className="container">
        <header>
          <h1>Rock Paper Scissors</h1>
        </header>
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
