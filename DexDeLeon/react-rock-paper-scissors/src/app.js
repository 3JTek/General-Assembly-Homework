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
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }


  getRandom(){
    return Math.floor(Math.random() * this.state.options.length)
  }

  cpuChoice(){
    const i = this.getRandom()
    const choice = this.state.options[i].name
    return {choice: choice, index: i, image: `assets/images/${choice}.png`}
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

  handleClick(e){
    const playerChoice = {
      choice: e.target.value,
      index: e.target.dataset.id,
      image: `assets/images/${e.target.value}.png`}
    this.setState({player: playerChoice,
      cpu: this.cpuChoice()
    },
    () => {
      console.log('player: ', this.state.player)
      console.log('cpu: ', this.state.cpu)
      console.log(this.getWinner())
    })
  }
  // METHODS ******************

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
              <GameBoard
                options={this.state.options}
                handleClick={this.handleClick}
              />
              <h1 id="player">Player: {this.state.player.choice}</h1>
              <h1 id="cpu">CPU: {this.state.cpu.choice}</h1>
            </div>
            <div className="computer choice"></div>
          </div>
        </main>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
