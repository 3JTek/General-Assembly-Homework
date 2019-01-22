import React from 'react'
import axios from 'axios'

class WineShow extends React.Component {

  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({ wine: res.data }))
  }

  render() {
    if(!this.state.wine) return null
    const { name, origin, image, tastingNotes } = this.state.wine
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>
          <h2 className="subtitle is-2">{origin}</h2>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image is-2by3">
                <img className="" src={image} alt={name} />
              </figure>
            </div>

            <div className="column">
              <h4 className="title is-2">Tasting Notes</h4>
              <p>{tastingNotes}</p>
              <hr />
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default WineShow
