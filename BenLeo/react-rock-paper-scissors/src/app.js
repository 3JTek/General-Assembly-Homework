import React from 'react'
import ReactDOM from 'react-dom'

import Buttons from './components/Buttons'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      moves: [
        {
          name: 'rock',
          wins: 'scissors',
          loses: 'paper'
        },

        {
          name: 'paper',
          wins: 'rock',
          loses: 'scissors'
        },

        {
          name: 'scissors',
          wins: 'paper',
          loses: 'rock'
        }
      ]
    }
  }

  render() {
    const { moves } = this.state
    return(
      <Buttons {...moves}/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
