import React from 'react'
import axios from 'axios'

class WineboredsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      wines: []
    }
  }


  componentDidMount() {
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({wines: res.data}))
  }



  render() {
    console.log(this.state.wines)
    return (
      <div>
        {this.state.wines.map(wine =>
          <div key={wine._id}> {wine.name} {wine.origin}
          </div>
        )}
      </div>
    )
  }
}

export default WineboredsIndex
