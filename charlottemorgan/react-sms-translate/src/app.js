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

  handleChange({ target: { value }}) {
    console.log(value)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.value)
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
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
