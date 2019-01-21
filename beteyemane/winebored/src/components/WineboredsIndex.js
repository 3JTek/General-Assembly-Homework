import React from 'react'
import axios from 'axios'
import WineboredsCards from './WineboredsCards'

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
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.wines.map(wine =>
                <div className="column is-one-quarter" key={wine._id}>
                  <WineboredsCards {...wine}/>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default WineboredsIndex
