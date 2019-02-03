import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/form'

// import axios from 'axios'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Ciao World'
    }
  }

  render() {

    return (
      <Form
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
