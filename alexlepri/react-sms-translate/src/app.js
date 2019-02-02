import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'

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
      <main>
        <Header name="Alex" message={this.state.message} />
      </main>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
