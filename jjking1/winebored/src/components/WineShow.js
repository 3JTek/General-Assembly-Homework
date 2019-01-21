import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Map from './Map'


class WineShow extends React.Component{
  constructor(){
    super()

    this.state={}
  }

  componentDidMount(){
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({ wine: res.data }))
  }


  render(){
    if(!this.state.wine) return <h1 className="title is-1"> Loading... </h1>
    const {_id, name, origin, user, grape, price, tastingNotes, location, image, abv} = this.state.wine
    console.log(location)
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1"> {name} </h1>
          <h2 className="subtitle is-2"> {origin}</h2>
          <hr />

          <div className="columns">
            <div className="column" id="showImage">
                <img src={image} alt={name}/>
            </div>

            <div className="column">
              <div className="content">

                <h4 className="title is-4">Tasting Notes</h4>
                <p> {tastingNotes}</p>
                <hr />

                <ul>
                  <li>Abv: {abv}</li>
                  <li>Price: {price}</li>
                  <li>Grape: {grape}</li>
                </ul>
                <Link to={{
                  pathname: `/wines/${_id}/${location}`,
                  state: {
                    coords: location,
                    image: image
                  }}}> View Origin Location on Map </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}



export default WineShow
