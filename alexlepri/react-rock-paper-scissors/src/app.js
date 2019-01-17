import React from 'react'
import ReactDOM from 'react-dom'

import Button from './components/Button'
import './style.scss'

class App extends React.Component {
  constructor(){
    super()
    this.state= {
      newChoices: ''
    }
  }

  handleClick(){
    console.log('im a button')
  }


  render(){
    return (
      <main>
        <div>
          <Button handleClick={this.handleClick} />

        </div>
      </main>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
