import React from 'react'
import axios from 'axios'


class WinesShow extends React.Component {

  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    axios.get(`https:winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({ wine: res.data }))
  }

  render() {

    if (!this.state.wine) return null
    const { name, origin, image, tastingNotes, price, grape, abv } = this.state.wine
    return(
      <section className="section">
        <div className="container">
          <h1 className="title">{name}</h1>
          <hr />
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className="column">
              <p> <strong>{grape}</strong></p>
              <h4 className="title is-4">{origin}</h4>
              <hr />
              <h4 className="title is-5">Tasting notes:</h4>
              <p> {tastingNotes}</p>
              <p> {abv}% </p>
              <hr />
              <h3 className="title is-5">£{price}</h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WinesShow
