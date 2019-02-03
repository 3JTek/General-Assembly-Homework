import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import bulma from 'bulma'

class App extends React.Component {
  constructor() {
    super()

    //this.state = {}
  }

  componentDidMount() {
    axios.post('/api/message', {
      params: {
        message: 'Good morning sunshine!',
        lang: 'de',
        to: '+447870681920'
      }
    })
    .then(()=>console.log('All done'))
//      .then(res => this.setState({ message: res.message })
//    )
  }

  render() {
    if (!this.state) return null
    return (
      <main>
        <div>Hullo?</div>
      </main>
    )
  }


}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
