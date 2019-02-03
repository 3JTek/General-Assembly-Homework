import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import axios from 'axios'
import './style.scss'
import 'bulma'



class App extends React.Component {
  constructor(){
    super()

    this.state = {}


    this.handlechange= this.handlechange.bind(this)
    this.handlesubmit= this.handlesubmit.bind(this)
  }
  handlesubmit() {
    axios.post('/api/message', this.state)
  }
  handlechange({ target: {name, value} }){
    this.setState({ [name]: value })
  }


  render(){
    return (
      <div>
        <Form
          handlechange={this.handlechange}
          handlesubmit={this.handlesubmit}
        />
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
