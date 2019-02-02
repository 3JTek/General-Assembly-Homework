import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

class App extends React.Component {
  constructor(){
    super()

    this.state = {}

    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler({ target: { value } }){
    this.setState({ value })
  }

  render(){
    return (
      <div>
        <h1>React SMS</h1>
        <form>
          <input
            name="message"
            value={this.state.message}
            onChange={this.changeHandler}
          />
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
