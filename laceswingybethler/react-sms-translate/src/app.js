import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import bulma from 'bulma'
import Form from './components/Form'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      message: 'I love you more than little kittens',
      lang: 'de',
      to: '+7510509049'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  componentDidMount() {
    console.log('component did mount!')

    axios.post('/api/message', {
      message: this.state.message,
      lang: this.state.lang,
      to: this.state.to
    })
      .then(()=>console.log('All done'))
//      .then(res => this.setState({ message: res.message })
//    )
  }

  render() {
    //if (!this.state) return null
    return (
      <main>
        <div className="container section">
          <h2 className="title is-2">SMS Translation</h2>
          <Form
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }


}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
