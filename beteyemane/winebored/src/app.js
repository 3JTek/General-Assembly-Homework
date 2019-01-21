import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import WineboredIndex from './components/WineboredIndex'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({wines: res.data}))
  }


  render() {
    // console.log(this.state.wines)
    return (
      <main>
        <WineboredIndex />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
