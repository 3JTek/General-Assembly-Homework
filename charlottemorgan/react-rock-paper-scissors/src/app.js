import React from 'react'
import ReactDOM from 'react-dom'




class App extends React.Component {
  constructor(){
    super()

    this.state = {
      computerChoice: '',
      playerChoice: '',
      winner: '',
      options: [
        'rock',
        'paper',
        'scissors'
      ]
    }

    this.handleChoice = this.handleChoice.bind(this)


  }

  handleChoice(e){
    console.log(e.target.value)
    this.computerChoice()
  }

  computerChoice(){
    console.log(this.state.options[Math.floor(Math.random() * (this.state.options.length))])
  }


  render() {
    return(
      <div>
        <div>
          <h1>Rock, Paper, Scissors</h1>
        </div>
        <div>
          <button value="rock" onClick={this.handleChoice}>Rock</button>
          <button value="promaper" onClick={this.handleChoice}>Paper</button>
          <button value="scissors" onClick={this.handleChoice}>Scissors</button>
        </div>
      </div>



    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
