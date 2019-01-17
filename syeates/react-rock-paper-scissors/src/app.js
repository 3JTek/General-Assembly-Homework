import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'

import TaskForm from './components/TaskForm'

class App extends React.Component {
  constructor(){
    super()

    this.state ={
      todos: [{task: 'make a todo app'}],
      newTask: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    console.log(e.target.value)
    this.setState({newTask: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    const task = { task: this.state.newTask}
    const newTodos = [...this.state.todos, task]
    this.setState({ todos: newTodos, newTask: ''})
  }

  render() {
    return (
      <main>
        <h1>You have 1 thing(s) to do!</h1>
        <ul>
          {this.state.todos.map((todo, index) => <li key={index}>{todo.task}</li>)}
        </ul>

        <TaskForm
          handleChange={this.handleChange}
          newTask={this.state.newtask}
        />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
