import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Buttons from './components/Buttons'


 class App extends React.Component {
  constructor(){
    super()
   }


  winCheck(e) {
      console.log(e.target.value)
    if(player1Choice === player2Choice) return 'Tie'
    if(this.winConditions[player1Choice] === player2Choice) return 'You win'
    return 'You lose'
    this.setState({e.target.value})
  }


  clickHandle(e){
    console.log(click click.)
  }

   render(){
    return (
      <main>
        <div>
          <Buttons clickHandle={this.clickHandle} />
         </div>
      </main>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
