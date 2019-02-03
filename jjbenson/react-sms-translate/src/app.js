import React from 'react'
import ReactDOM from 'react-dom'


import axios from 'axios'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      message: 'Hello World!',
      lang: 'fr',
      to: '+447727243167',
      translation: 'TRANSLATION WILL APPEAR HERE'
    }

    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleLanguageChange = this.handleLanguageChange.bind(this)
    this.handleToChange = this.handleToChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log(this.state)
  }

  handleMessageChange(e){
    console.log(e.target.value)
    //Update the new task object
    this.setState({ message: e.target.value })
  }

  handleLanguageChange(e){
    console.log(e.target.value)
    //Update the new task object
    this.setState({ lang: e.target.value })
  }

  handleToChange(e){
    console.log(e.target.value)
    //Update the new task object
    this.setState({ to: e.target.value })
  }

  //Method that fires when form submitted
  handleSubmit(e){
    //prevent the page reloading
    e.preventDefault()
    //Create a new tas
    axios.post('/api/message',{
      message: this.state.message,
      lang: this.state.lang,
      to: this.state.to
    })
      .then(res => this.setState({ translation: res.data }))
  }



  componentDidMount(){
    // axios.post('/api/message',{
    //   message: this.state.message,
    //   lang: this.state.lang,
    //   to: this.state.to
    // })
    //   .then(res => this.setState({ translation: res.data }))
  }
  render(){
    console.log(this.state.translation)
    return(
      <main>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <input
              name="message"
              /*onChange will call handleChange when fired*/
              onChange={this.handleMessageChange}
              value={this.state.message}
            />
            <input
              name="language"
              /*onChange will call handleChange when fired*/
              onChange={this.handleLanguageChange}
              value={this.state.lang}
            />
            <input
              name="to"
              /*onChange will call handleChange when fired*/
              onChange={this.handleToChange}
              value={this.state.to}
            />
            <button>Get Translation</button>
          </form>
          <h1>Translation</h1>

        </div>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
