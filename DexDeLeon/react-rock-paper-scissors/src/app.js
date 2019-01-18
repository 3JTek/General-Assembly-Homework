import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Header from './components/Header'
import GameBoard from './components/GameBoard'
import Choice from './components/Choice'

class App extends React.Component{
  constructor(){
    super()
    const sprEf = '\nIt\'s super effective!'
    this.state = {
      // This array doesn't need to live in state, should be in the constructor
      options: [
        {
          name: 'rock',
          beats: ['scissors', 'lizard'],
          action: [
            `The rock used body slam on the scissors.${sprEf}`,
            `The rock used crush on the lizard.${sprEf}`,
            'The rocks smash against each other, but nothing happens...'
          ]
        },
        {
          name: 'paper',
          beats: ['rock', 'spock'],
          action: [
            `The paper used cover on the rock.${sprEf}`,
            `The paper used disprove on Spock.${sprEf}`,
            'The two sheets of paper lie awkwardly on top of each other, but nothing happens...'
          ]
        },
        {
          name: 'scissors',
          beats: ['paper', 'lizard'],
          action: [
            `The scissors used cut on the paper.${sprEf}`,
            `The scissors used decapitate on the lizard.${sprEf}`,
            'The scissors snip angrily at each other, but nothing happens...'
          ]
        },
        {
          name: 'lizard',
          beats: ['paper', 'spock'],
          action: [
            `The lizard used devour on the paper.${sprEf}`,
            `The lizard used poison on Spock.${sprEf}`,
            'The lizards seem cool with each other; I think they might be friends now...'
          ]
        },
        {
          name: 'spock',
          beats: ['rock', 'scissors'],
          action: [
            `Spock used disintegrate on the rock.${sprEf}`,
            `Spock used smash on the scissors.${sprEf}`,
            'The two Spocks exchange their ideas and logical observations...'
          ]
        }
      ],
      // State should be used only for elements to be displayed on the DOM
      player: {
        choice: '',
        index: 0,
        message: '',
        image: ''
      },
      cpu: {
        choice: '',
        index: 0,
        message: '',
        image: ''
      },
      text: 'Click a button to start!',
      action: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.reset = this.reset.bind(this)
    this.getWinner = this.getWinner.bind(this)
  }

  // METHODS *******************************************************************

  getRandom(){
    return Math.floor(Math.random() * this.state.options.length)
  }

  cpuChoice(){
    const i = this.getRandom()
    const choice = this.state.options[i].name
    return {
      choice: choice,
      index: i,
      image: `assets/images/${choice}.png`,
      message: `Computer chose ${choice.toUpperCase()}!`
    }
  }

  getWinner(){
    const cpu = this.state.cpu
    const player = this.state.player

    // DO LOGIC BEFORE SETTING STATE SO YOU ONLY HAVE TO RENDER ONCE
    if (cpu.choice === player.choice){
      this.setState({
        action: this.state.options[player.index].action[2]
      })
      return 'It\'s a tie!'
    } else if(this.state.options[player.index].beats.includes(cpu.choice)){
      const winner = this.state.options[player.index]
      this.setState({
        action: winner.action[
          winner.beats.findIndex(option =>
            option === cpu.choice
          )
        ]
      })
      return 'You Win!'
    } else if(this.state.options[cpu.index].beats.includes(player.choice)){
      const winner = this.state.options[cpu.index]
      this.setState({
        action: winner.action[
          winner.beats.findIndex(option =>
            option === player.choice
          )
        ]
      })
      return 'You Lose!'
    }
  }

  reset(){
    const playerInit = {
      choice: '',
      index: 0,
      message: '',
      image: ''
    }

    const cpuInit = {
      choice: '',
      index: 0,
      message: '',
      image: ''
    }

    this.setState({
      player: playerInit,
      cpu: cpuInit,
      text: 'Click a button to start!!',
      action: ''
    })
  }

  handleClick(e){
    const playerChoice = {
      choice: e.target.value,
      index: e.target.dataset.id,
      image: `assets/images/${e.target.value}.png`,
      message: 'You chose ' + e.target.value.toUpperCase() + '!'
    }
    this.setState({player: playerChoice,
      cpu: this.cpuChoice()
    },
    () => {
      this.setState({text: this.getWinner()})
    })
  }

  // RENDER ********************************************************************

  render(){
    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <Choice
              id="player"
              image={this.state.player.image}
              choice={this.state.player.choice}
              message={this.state.player.message}
            />
            <div className="center">
              <h3 id="actionMessage">{this.state.action}</h3>
              <h2 id="message">{this.state.text}</h2>
              <GameBoard
                options={this.state.options}
                handleClick={this.handleClick}
                reset={this.reset}
              />
            </div>
            <Choice
              id="computer"
              image={this.state.cpu.image}
              choice={this.state.cpu.choice}
              message={this.state.cpu.message}
            />
          </div>
        </main>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
