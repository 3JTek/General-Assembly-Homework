import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      computerChoice: '',
      playerChoice: '',
      




    }
  }

  render(){
    return(
      <div>
        <div>
        </div>
        <div>
          <button>Rock</button>
          <button>Paper</button>
          <button>Scisors</button>
        </div>
      </div>
    )

  }

}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
