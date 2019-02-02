import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

import Form from './components/Forms.js'

import axios from 'axios'

class App extends React.Component{

  constructor(){
    super()
    this.state ={
      data: {
        message: '',
        to: '',
        lang: 'fr'
      }
    }
    this.handleChange =this.handleChange.bind(this)
    this.handleSubmit =this.handleSubmit.bind(this)
  }

  componentDidMount(){
    axios.get('/api/language')
      .then((languages) => console.log(languages.data.langs))
      .catch(err => console.log(err))
  }

  handleChange({target: { name, value } }){
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }
  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/message',{
      ...this.state.data
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    console.log(this.state)
  }


  render(){
    return(
      <main className='section'>
        <section className="hero is-primary is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className='title is-1'>React Sms Translator</h1>
            </div>
          </div>
        </section>
        <div className='container'>
          <div className='columns '>
            <div className='column'>
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
