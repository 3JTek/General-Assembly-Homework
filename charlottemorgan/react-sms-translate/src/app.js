import React from 'react'
import ReactDOM from 'react-dom'

import Form from './components/Form'

class App extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.setState({ submit: this.state.value })
    console.log(this.state)
  }

  handleChange( { target: { value }} ) {
    console.log(value)
    this.setState({ value })
  }
  // componentDidMount() {
  //     axios.get('/api/message', {
  //       params: { city: 'London, UK' } //params here is the same as doing a qs in backend
  //     })
  //       .then(res => this.setState({ forecast: res.data }))
  //   }



  render() {
    return (
      <div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
        <p>{this.state.submit}</p>
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
