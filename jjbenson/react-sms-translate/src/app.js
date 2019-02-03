import React from 'react'
import ReactDOM from 'react-dom'


import axios from 'axios'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      sent: false,
      translation: null,
      response: null,
      message: '',
      lang: '',
      to: ''
    }

    //Bind methods
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleLanguageChange = this.handleLanguageChange.bind(this)
    this.handleToChange = this.handleToChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleMessageChange(e){
    //Update the message
    this.setState({ message: e.target.value })
  }

  handleLanguageChange(e){
    //Update language
    this.setState({ lang: e.target.value })
  }

  handleToChange(e){
    //Update the to
    this.setState({ to: e.target.value })
  }

  //Method that fires when form submitted
  handleSubmit(e){
    //prevent the page reloading
    e.preventDefault()

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

  //On load get the list of languages
  componentDidMount(){
    axios.get('/api/langlist')
      .then(res =>
        this.setState( { langList: res.data }) )
      .catch( err => console.log(err.errors) )
  }

  //Method that allows us to loop through an object and build the select
  showLangs(){
    //Make an array to hold the options
    const rows = [<option key="choose" value="0" disabled>Please select an option</option>]
    //For each item in object
    for (const lang in this.state.langList) {
      //Push an option element into the array
      rows.push(<option key={lang} value={lang}>{this.state.langList[lang]}</option> )
    }
    //Return the select with the options
    return <select onChange={this.handleLanguageChange} defaultValue="0">{rows}</select>
  }


  render(){
    const {sent, langList, message, to, lang, response, translation} = this.state
    return(
      <main>
        {/*SPLIT THESE INTO DIFFERENT COMPONENTS*/}
        {!sent && <div className="container">
          <h1>SMS Translate</h1>
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="message">Your message</label>
            <textarea
              name="message"
              onChange={this.handleMessageChange}
              defaultValue={message}
            ></textarea>

            <label htmlFor="language">Select a language:</label>
            {langList && this.showLangs()}

            <label htmlFor="to">Phone number to send to:</label>
            <input
              name="to"
              onChange={this.handleToChange}
              value={to}
            />
            {(message && to && lang)?
              <button>Translate & Send</button>:
              <p className="button disabled">Translate & Send</p>
            }
          </form>
        </div>}

        {/*SPLIT THESE INTO DIFFERENT COMPONENTS*/}
        {sent &&
        <div className="container">
          <div className="response">
            <h1>SMS Translate</h1>
            <h2 className='success'>{response}</h2>
            <label htmlFor="translation">Translation:</label>
            <textarea name="translation" value={translation} disabled></textarea>
            <label htmlFor="to">Message sent to:</label>
            <input
              name="to"
              value={to}
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
