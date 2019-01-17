import React from 'react'
import ReactDOM from 'react-dom'


import './style.scss'
import Buttons from './components/Buttons'


class App extends React.Component {
  constructor() {
    super()
  }



  clickButton(){
    console.log('working')
  }




  render(){
    return (
      <div>
        <Buttons clickButton={this.clickButton}/>
      </div>
    )
  }

}























ReactDOM.render(
  <App />,
  document.getElementById('root')
)
