import React from 'react'

import axios from 'axios'

class WineShow extends React.Component {

  constructor(){
    super()

    this.state = {
      wine: []
    }
  }

  componentDidMount(){
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({ wine: res.data }))
  }


  render(){
    const {
      name,
      origin,
      image,
      tastingNotes,
      location,
      grape,
      abv,
      price
    } = this.state.wine
    return (
      <section className="section">
        <div className="container wineShow">
          <h1 className="title is-1">{name}</h1>
          <h2 className="subtitle is-2">{origin}</h2>
          <hr />

          <div className="columns">

            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
              <div >

              </div>
            </div>

            <div className="column">
              <h4 className="title is-4">
                <strong>Grape:</strong> {grape}
              </h4>
              <h4 className="title is-4">
                <strong>Alcohol By Volume:</strong> {abv}
              </h4>
              <hr />
              <h4 className="title is-4">Tasting Notes:</h4>
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
