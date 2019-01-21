import React from 'react'
import axios from 'axios'

import Map from './Map'

class WineShow extends React.Component{

  constructor(){
    super()
    this.state = {}
  }
  getCountryData(){
    axios.get('https://restcountries.eu/rest/v2/name/'+this.state.wine.origin)
      .then(res => {
        console.log(res.data[0].flag)
        this.setState( {countryData: res.data[0]})
      })
  }
  componentDidMount(){
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then( res =>{
        this.setState({ wine: res.data})
        this.getCountryData()
      })


  }

  render(){
    if(!this.state.wine) return null
    if(!this.state.countryData) return null
    const { name, origin, image, tastingNotes, grape, abv, price} = this.state.wine
    const { flag } = this.state.countryData
    return(
      <div>
        <section className="section">
          <article className="container">
            <h1 className="title is-1">{name}</h1>
            <hr />
            <div className='level'>
              <figure className="level-item" style={{ backgroundImage: `url(${flag})` }} />
              <h6 className="level-item is-6">{'Origin:'}&nbsp;<strong>{origin}</strong></h6>
              <h6 className="level-item is-6">{'Grape:'}&nbsp;<strong>{grape}</strong></h6>
              <h6 className="level-item is-6">{'Abv:'}&nbsp;<strong>{abv}</strong></h6>
              <h6 className="level-item is-6">{'Price:'}&nbsp;<strong>{'£'+price}</strong></h6>
            </div>
            <hr />
            <div className="columns">
              <div className="column">
                <figure className="image">
                  <img src={image} alt={name} />
                </figure>
              </div>
              <div className="column">
                <div className="content">
                  {tastingNotes}
                </div>
              </div>
            </div>
          </article>
        </section>
        <Map
          zoom="8"
          location={this.state.wine.location}
        />
      </div>

    )
  }
}

export default WineShow
