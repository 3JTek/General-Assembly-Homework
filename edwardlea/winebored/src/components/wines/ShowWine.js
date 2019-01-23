import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import Auth from '../../lib/Auth'

import Map from './Map'

class ShowWine extends React.Component {
  constructor(){
    super()

    this.state = {

    }

    this.deleteWine = this.deleteWine.bind(this)
  }

  componentDidMount(){
    axios.get(
      `https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({wine: res.data}))
  }

  deleteWine() {
    console.log(this.state)
    axios
      .delete(
        `https://winebored.herokuapp.com/wines/${this.state.wine._id}`,
        {headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => {
        this.props.history.push('/wines')
        alert(`${this.state.wine.name} has been deleted`)
      })
      .catch((err) => alert(err.message))
  }

  render(){
    if(!this.state.wine) return null

    const {name, image, price, origin, tastingNotes, location, abv, grape, _id} = this.state.wine

    console.log(this.state.wine)
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>
          <h4 className="title is-4">From {origin}  </h4>
          <div className="columns">
            <div className="column">
              <figure className="image" style={{ backgroundImage: `url(${image})`}}>
              </figure>
              <div className="edit-wines">

                <Link  to={`/wines/${_id}/edit`}><button className="button is-dark">Edit</button></Link>
                <button onClick={this.deleteWine} className="button is-dark">Delete</button>
              </div>
            </div>
            <div className="column">
              <h4 className="title is-4">Tasting Notes</h4>
              <hr />
              <p> {tastingNotes}</p>
              <hr />
              <p> Strength: {abv}%</p>
              <p> Grape Variety: {grape}</p>
              <hr />
              <div className="buy-now">
                <p>Available on Amazon £{price} </p>
                <button className="button is-dark">Buy it Now</button>
              </div>
              <div>
                <Map
                  zoom={5}
                  location={location}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ShowWine
