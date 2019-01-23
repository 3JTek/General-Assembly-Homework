import React from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios'

import Map from './Map'

class WinesShow extends React.Component{

  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    console.log(this.props)
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({wine: res.data}))
      .catch(err => console.log(err.message))
  }

  render(){
    if(!this.state.wine) return false
    const {_id, name, image, origin, grape, price, tastingNotes, location} = this.state.wine
    return(
      <section className="section">
        <div className="container">
          <Link to={`/wines/edit/${_id}`}>
            <div className="button is-primary">Edit</div>
          </Link>
          <h1 className="title is-1">{name}</h1>
          <h2 className="subtitle is-2">{grape}</h2>
          <h2 className="subtitle is-2">${price}</h2>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>

            <div className="column">
              <h4 className="title is-4">Tasting Notes</h4>
              <p>{tastingNotes}</p>
              <hr />
            </div>

            <div className="column">
              <h4 className="title is-4">Origin: {origin}</h4>
              {location && <Map latlng={location} />}
            </div>

          </div>
        </div>
      </section>
    )
  }
}



export default WinesShow
