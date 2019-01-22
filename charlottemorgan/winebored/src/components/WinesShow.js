import React from 'react'
import axios from 'axios'

class WinesShow extends React.Component {

  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`https:winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({ wine: res.data }))

  }

  render() {
    if(!this.state.wine) return null
    const { name, origin, image, tastingNotes, price, grape } = this.state.wine
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image" style={{backgroundImage: `url(${image})`}} alt={name} />
            </div>

            <div className="column">
              <h4 className="title is-4">{origin}</h4>
              <hr />

              <h4 className="title is-4">Tasting Notes</h4>
              <p>{tastingNotes}</p>
              <hr />

              <h4 className="title is-4">Grape Variety</h4>
              <p>{grape}</p>
              <hr />

              <h4 className="title is-4">Price</h4>
              <p>{price}</p>
              <hr />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WinesShow
