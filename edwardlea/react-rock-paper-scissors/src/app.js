import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      computerChoice: '',
      playerChoice: '',
      options: [
        'rock',
        'paper',
        'scissors'
      ]

    }


    this.computerChoice = this.computerChoice.bind(this)
    this.handleChoice = this.handleChoice.bind(this)




  }

  handleChoice(e) {
    console.log(e.target.value)
    const computerChoice = this.computerChoice()
    

  }

  computerChoice(){
    console.log(this.state.options[Math.floor(Math.random() * (this.state.options.length))])
    return this.state.options[Math.floor(Math.random() * (this.state.options.length))]

  }

  winnerLogic(){

  }



  render(){
    return(
      <div>
        <div>
          <h1> Rock, Paper, Scicsors</h1>
        </div>
        <div>
          <button value="Rock" onClick={this.handleChoice}>Rock</button>
          <button value="Paper" onClick={this.handleChoice}>Paper</button>
          <button value="Sciscors" onClick={this.handleChoice}>Sciscors</button>

        </div>
      </div>
    )

  }

}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
