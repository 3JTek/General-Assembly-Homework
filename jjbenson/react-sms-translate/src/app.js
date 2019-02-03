import React from 'react'
import ReactDOM from 'react-dom'


import axios from 'axios'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      sent: true,
      translation: 'THIS IS A TEST',
      response: 'The message was sent succesfully',
      message: '',
      lang: '',
      to: '+447727243167'
    }

    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleReset = this.handleReset.bind(this)
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
      .then(res => this.setState({
        sent: true,
        translation: res.data.translation,
        response: res.data.message
      }))
  }

  handleReset(){
    this.setState({
      sent: false,
      message: '',
      lang: '',
      to: '+447727243167',
      translation: null
    })
  }



  componentDidMount(){
    axios.get('/api/langlist')
      .then(res => {
        console.log(this.state.langList)
        this.setState({ langList: res.data })
      })
  }
  showLangs(){
    const rows = [<option key="choose" vale="0" disabled>Please select an option</option>]
    for (const lang in this.state.langList) {
      rows.push(<option key={lang} value={lang}>{this.state.langList[lang]}</option> )
    }
    return <select onChange={this.handleLanguageChange} defaultValue="0">{rows}</select>
  }
  render(){
    console.log(this.state.translation)
    return(
      <main>
        {!this.state.sent && <div className="container">
          <h1>SMS Translate</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="message">Your message</label>
            <textarea
              name="message"
              /*onChange will call handleChange when fired*/
              onChange={this.handleMessageChange}
              defaultValue={this.state.message}
            ></textarea>

            <label htmlFor="language">Select a language:</label>
            {this.state.langList && this.showLangs()}
            <label htmlFor="to">Phone number to send to:</label>
            <input
              name="to"
              /*onChange will call handleChange when fired*/
              onChange={this.handleToChange}
              value={this.state.to}
            />
            {(this.state.message && this.state.to && this.state.lang)?
              <button>Translate & Send</button>:
              <p className="button disabled">Translate & Send</p>
            }
          </form>

        </div>}
        {this.state.sent &&
        <div className="container">
          <div className="response">
            <h1>SMS Translate</h1>
            <h2 className='success'>{this.state.response}</h2>
            <label htmlFor="translation">Translation:</label>
            <textarea name="translation" value={this.state.translation} disabled></textarea>
            <label htmlFor="to">Message sent to:</label>
            <input
              name="to"
              /*onChange will call handleChange when fired*/
              onChange={this.handleToChange}
              value={this.state.to}
              disabled
            />
            <button onClick={this.handleReset}>Send another message</button>
          </div>
        </div>}
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
