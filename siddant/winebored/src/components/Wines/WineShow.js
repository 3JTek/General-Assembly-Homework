import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'


class WineShow extends React.Component {
  constructor(){
    super()
    this.state = {}
    this.deleteWine = this.deleteWine.bind(this)
  }

  componentDidMount(){
    axios.get(`http://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({data: res.data}))
  }

  deleteWine(){
    axios.delete(`http://winebored.herokuapp.com/wines/${this.props.match.params.id}`,
      {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      }
    )
      .then(() =>{
        alert(`Wine ${this.state.data.name} deleted`)
        this.props.history.push('/wines')
      } )
      .catch(err => alert(err.message))
  }

  render(){
    if(!this.state.data) return null
    const {name, origin, image, tastingNotes, price, grape} = this.state.data

    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>
          <hr />
          <div className="columns">
            <div className="column">
              <figure className ="image">
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className="column">
              <div className="content">
                <h4 className="title is-4">{origin}</h4>
                <hr />
                <p>£ {price}</p>
                <hr />
                <h4 className="title is-4">Tasting Notes</h4>
                <p>{tastingNotes}</p>
                <hr />
                <h4 className="title is-4">Grape</h4>
                <p>{grape}</p>
              </div>
            </div>
            <button className="button is-primary" onClick={this.deleteWine}>Delete</button>

          </div>
        </div>
      </section>
    )
  }
}

export default WineShow
