import React from 'react'
import axios from 'axios'

class WineShow extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    axios.get(`http://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({wines: res.data}))
  }

  render(){
    if(!this.state.wines) return null
    const {name, origin, image, tastingNotes, price, grape} = this.state.wines

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
                <hr />
                <div className="control">
                  <input className="input" type="number" value="0"   min="0"/>
                  <button className="button is-primary">Add to Basket</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WineShow
