import React from 'react'
import axios from 'axios'

class WinesShow extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    console.log(this.props)
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({ wine: res.data }))
  }

  render() {
    if(!this.state.wine) return null
    console.log(this.props)
    const { name, origin, image, tastingNotes } = this.state.wine
    return(
      <section className="section">
        <div className="container">

          <h1 className="title is-1">{name}</h1>
          <h2 className="subtitle is-2">{origin}</h2>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>

            <div className="column">
              <div className="content">
                <h4 className="title is-4">Tasting Notes</h4>
                <p>{tastingNotes}</p>

              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default WinesShow
