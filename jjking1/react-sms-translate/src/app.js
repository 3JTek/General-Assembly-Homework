import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

// wanted to try to use something other than bulma
// couldn't figure out to import the css so just put the cdn in head
import { Container, Grid, Segment } from 'semantic-ui-react'
import Steps from './components/Steps'
import Composer from './components/Composer'
import Title from './components/Title'
import Result from './components/Result'
import './style.scss'

// ---------------------------------------------------
// the recipient number is hardcoded, not really any more time to go back and make it work for new numbers
// please replace my number with yours in state to make it work for you. also the env files
// ----------------------------------------------------

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      result:'',
      languageOptions: '',
      phase: 1,
      postData: {
        message: '',
        lang: '',
        to: '+447502434799'
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDropDown = this.handleDropDown.bind(this)
  }

  componentDidMount(){
    // thanks siddant for this code
    axios
      .get('https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20190202T100814Z.6dc6fd37fad641cd.6d6d99d8973e2c9244daa798d754e9373303a28d&ui=*')
        .then(res => this.setState({ languageOptions: (Object.keys(res.data.langs).map(lang =>{
          return {
            key: lang,
            value: lang,
            text: res.data.langs[lang]
          }}))})
        )
  }

  handleSubmit(e){
    e.preventDefault()
    if(this.state.phase === 3){
      axios.post('/api/message', this.state.postData )
        .then(res => this.setState({ result: res.data.message }))
        .catch(err => this.setState({ result: err.message }))
    }
    this.setState({ phase: this.state.phase+1 })
  }

  handleChange({ target: {name, value }}) {
    const postData = {...this.state.postData, [name]: value }
    this.setState({ postData })
  }

  // necessary because you can't get the data from event object. weird semantic-ui thing
  handleDropDown(event, data){
    this.setState({ postData: {...this.state.postData , lang: data.value}})
  }

  render(){

    return(
      <div id='main-section'>
        <Grid columns={1} textAlign='center'>
          <Grid.Row>
              <Grid.Column width={8}>
                {this.state.phase > 3 &&
                  <Result
                    message={this.state.result}
                  />
                }

                { this.state.phase < 4 &&
                  <Segment>
                    <Title />

                    <Composer
                      languageOptions={this.state.languageOptions}
                      handleDropDown={this.handleDropDown}
                      handleChange={this.handleChange}
                      phase={this.state.phase}
                      handleSubmit={this.handleSubmit}
                      postData={this.state.postData}
                    />

                    <Steps
                      phase={this.state.phase}
                    />

                  </Segment>
                }
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
