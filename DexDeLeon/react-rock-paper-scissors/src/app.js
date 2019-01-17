import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Header from './components/Header'
import GameBoard from './components/GameBoard'
import Choice from './components/Choice'

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      options: [
        {
          name: 'rock',
          beats: 'scissors'
        },
        {
          name: 'paper',
          beats: 'rock'
        },
        {
          name: 'scissors',
          beats: 'paper'
        }
      ],
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
      text: 'Click a button to start!'
    }
    this.handleClick = this.handleClick.bind(this)
    this.reset = this.reset.bind(this)
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

    if (cpu.choice === player.choice){
      return 'It\'s a tie!'
    } else if(this.state.options[player.index].beats === cpu.choice){
      return 'You Win!'
    } else if(player.choice === this.state.options[cpu.index].beats){
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
      text: 'Click a button to start!!'
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
