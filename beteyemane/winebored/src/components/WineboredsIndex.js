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
        <section className="section">
          <div className="container">
            <div className="column is-multiline">
              {this.state.wines.map(wine =>
                <div className="column is-one-quarter" key={wine._id}> {wine.name} {wine.origin}
                  <div className="image" style={{backgroundImage: `url(${wine.image})`}}>
                  </div>
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
