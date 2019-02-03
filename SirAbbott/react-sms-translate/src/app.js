import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import DropDown from './components/DropDown'

import axios from 'axios'
import 'bulma'

class App extends React.Component {

  constructor(){
    super()

    this.state = {

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount(){
    axios.get(`https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=${process.env.YANDEX_KEY}&ui=en`)
      .then(res => this.setState({ countries: res.data }))
      .catch( error => console.log(error))
  }

  handleSubmit(e){
    e.preventDefault()
    this.translateText()
  }

  handleChange( { target: { value }} ) {
    this.setState({ value })
  }

  handleSelect(e){
    e.preventDefault()
    this.setState({ lang: e.target.value })
  }

  translateText(){
    return axios.post('/api/message', {
      message: this.state.value,
      lang: this.state.lang,
      to: process.env.MY_NUM
    })
      .then(res =>{
        this.setState({ translatedText: res.data.output })
      } )

  }

  render(){
    if (!this.state.countries) return <p> loading..... </p>
    return (
      <div className="section">
      
        <div className="container">
          <DropDown
            handleSelect={this.handleSelect}
            countries={this.state.countries}
          />
        </div>
        <div className="section">
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className="container is-widescreen">
          <div className="title is-2">
            {this.state.translatedText && this.state.translatedText}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
