import React from 'react'
import ReactDOM from 'react-dom'




class App extends React.Component {
  constructor(){
    super()

    this.state = {

    }
  }

render() {
  return(
    <div>
    <button>Rock</button>
    <button>Paper</button>
    <button>Scissors</button>





    </div>



  )
}

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
