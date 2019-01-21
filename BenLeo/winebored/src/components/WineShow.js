import React from 'react'

import axios from 'axios'

class WineShow extends React.Component {
  constructor() {
    super()

    this.state= {}
  }
  componentDidMount() {
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({wines: res.data}))
  }

  render() {
    if(!this.state.wines) return null
    const { name, origin, image, tastingNotes, grape, abv, price, user } = this.state.wines
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

                <h4 className="title is-4">Grape</h4>
                <p>{grape}</p>

                <h4 className="title is-4">Alcohol By Volume</h4>
                <p>{abv}%</p>

                <h4 className="title is-4">Tasting Notes</h4>
                <p>{tastingNotes}</p>

                <h4 className="title is-4">Price</h4>
                <p>£{price}</p>
                <hr />
                <p><strong>Uploaded by:</strong> {user.username}</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WineShow
