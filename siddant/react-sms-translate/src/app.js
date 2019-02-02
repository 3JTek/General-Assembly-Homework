import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import Form from './components/Forms.js'

class App extends React.Component{

  constructor(){
    super()
    this.state ={}
    this.handleChange =this.handleChange.bind(this)
    this.handleSubmit =this.handleSubmit.bind(this)

  }

  handleChange({target: { name, value } }){
    this.setState({[name]: value })
  }
  handleSubmit(e){
    e.preventDefault()
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
