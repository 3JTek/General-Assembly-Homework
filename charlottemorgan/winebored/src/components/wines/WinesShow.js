import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import {Link} from 'react-router-dom'

class WinesShow extends React.Component {

  constructor() {
    super()

    this.state = {}

    this.deleteWine = this.deleteWine.bind(this)
  }

  componentDidMount() {
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({ wine: res.data }))

  }

  deleteWine(){
    axios.delete(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/wines'))
      .catch(err => alert(err.message))
  }

  render() {
    if(!this.state.wine) return null
    const { name, origin, image, tastingNotes, price, grape, _id } = this.state.wine
    return(
      <section className="section">
        <div className="container">
          <h2 className="title is-1">{name}</h2>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image" style={{backgroundImage: `url(${image})`}} alt={name} />
            </div>

            <div className="column">
              <h4 className="title is-4">Origin</h4>
              <p>{origin}</p>
              <hr />

              <h4 className="title is-4">Tasting Notes</h4>
              <p>{tastingNotes}</p>
              <hr />

              <h4 className="title is-4">Grape Variety</h4>
              <p>{grape}</p>
              <hr />

              <h4 className="title is-4">Price</h4>
              <p>£{price}</p>
              <hr />
            </div>
          </div>
          <Link to={`/wines/${_id}/edit`}><button className="button is-dark">Edit</button></Link>
          <button onClick={this.deleteWine} className="button is-dark">Delete</button>
        </div>
      </section>
    )
  }
}

export default WinesShow
