import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// import Map from '../Map'

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
    if(this.state.wine.length === 0) return null
    const {
      _id,
      name,
      origin,
      image,
      tastingNotes,
      // location,
      grape,
      abv,
      price
    } = this.state.wine
    // const {lat, lng} = location
    return (
      <section className="section">
        <div className="container wineShow">
          <h1 className="title is-1">{name}</h1>
          <h2 className="subtitle is-2">{origin}</h2>
          <hr />

          <div className="columns">

            <div className="column is-half">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
              <div >

              </div>
            </div>

            {/*<Map
              zoom={5}
              center={{lat, lng}}
            />*/}

            <div className="column">
              <h4 className="title is-5">
                Grape: {grape}
              </h4>
              <h4 className="title is-5">
                Alcohol By Volume: {abv}%
              </h4>
              <h4 className="title is-5">
                Price: £{price}
              </h4>
              <hr />
              <h4 className="title is-5">Tasting Notes:</h4>
              <p>{tastingNotes}</p>
              <hr />

              <div className="columns" id="buttons">
                <Link
                  to={`/wines/${_id}/edit`}
                  className="button column is-4"
                >
                Edit
                </Link>

                <a className="button is-danger column is-4">Delete</a>
              </div>
            </div>


          </div>

        </div>
      </section>
    )
  }
}

export default WineShow
