import React from 'react'
import ReactDOM from 'react-dom'
import EventsIndex from './components/EventsIndex'

class App extends React.Component {
  constructor() {
    super()
  }


  render() {


    return (
      <div>
        < EventsIndex />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
