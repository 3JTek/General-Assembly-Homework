import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import Form from './components/Forms.js'

import axios from 'axios'

class App extends React.Component{

  constructor(){
    super()
    this.state ={
      message: '',
      to: '',
      lang: 'fr'
    }
    this.handleChange =this.handleChange.bind(this)
    this.handleSubmit =this.handleSubmit.bind(this)

  }

  handleChange({target: { name, value } }){
    this.setState({[name]: value })
  }
  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/message',{
      ...this.state
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    console.log(this.state)
  }


  render(){
    return(
      <main className='section'>
        <div className='container'>
          <div className='columns '>
            <div className='column'>
              <h1 className='title is-1'>Hello</h1>
              <Form
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
