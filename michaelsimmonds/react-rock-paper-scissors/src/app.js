import React from 'react'
import ReactDOM from 'react-dom'

import ButtonOne from './components/ButtonOne.js'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      win: {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
      },
      player: '',
      comp: ''
    }
    this.choices = Object.keys(this.state.win)
    console.log(this.choices)

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(e) {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({ player: e.target.value})
    const rand = this.choices[Math.floor(Math.random() * this.choices.length)]
    this.setState({ comp: rand })
  }



  // handleSubmit(e) {
  //   e.preventDefault()
  //   const task = { task: this.state.newTask}
  //   const newTodos = [...this.state.todos, task]  // spread previous todos before one just made so as not to change original
  //   this.setState({todos: newTodos, newTask: ''}) // updates the todos, newTask:'' clears the box after submission
  // }

  render() {
    return (
      <div>
        <ButtonOne handleClick={this.handleClick}/>
        <h1> {this.state.player} </h1>
        <h1> {this.state.comp} </h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
