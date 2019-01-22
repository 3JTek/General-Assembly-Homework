import React from 'react'
import axios from 'axios'

// import Auth from '../../lib/Auth'


// import WineEdit from './WineEdit'
import Map from '../Map'

import Auth from '../../lib/Auth'


class WineShow extends React.Component{

  constructor(){
    super()
    this.state = {}

    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    this.props.history.push(`/wines/${this.props.match.params.id}/edit`)
  }

  handleDelete(){
    axios.delete(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`, { headers: { Authorization: `Bearer ${ Auth.getToken() }` } })
      .then( () => this.props.history.push('/wines') )
      .catch((err)=>console.log(err.message))
  }


  //Get country data from REST Countries (we only need the flag)
  getCountryData(){
    axios.get('https://restcountries.eu/rest/v2/name/'+this.state.wines[0].origin)
      .then(res => {
        this.setState( {countryData: res.data[0]})
      })
      .catch((err)=>{
        console.log(err.message)
        this.setState( {countryData: { continue: true }})
      })
  }

  //Get data from WineBored
  getWineData(){
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then( res =>{
        this.setState({ wines: [res.data]})
        //Needs to be called after wines to get country name
        this.getCountryData()
      })
      .catch((err)=>console.log(err.message))
  }

  componentDidMount(){
    this.getWineData()
  }

  render(){
    if(!this.state.wines) return null
    if(!this.state.countryData) return null
    const { name, origin, image, tastingNotes, grape, abv, price} = this.state.wines[0]
    const { flag } = this.state.countryData
    return(
      <div>
        <section className="section">
          <article className="container">
            <h1 className="title is-1">{name}</h1>
            <hr />
            <div className='level'>
              {flag && <figure className="level-item" style={{ backgroundImage: `url(${flag})` }} />}

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
          <button className="button" onClick={this.handleClick}>Edit</button>
          <button className="button" onClick={this.handleDelete}>Delete</button>
        </section>
        {/*Add Map down here to make it full width*/}
        <Map
          zoom="8"
          wines={this.state.wines}
        />
      </div>
    )
  }
}

export default WineShow
