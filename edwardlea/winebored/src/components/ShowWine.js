import React from 'react'
import axios from 'axios'

class ShowWine extends React.Component {
  constructor(){
    super()

    this.state = {

    }
  }

  componentDidMount(){
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({wine: res.data}))
  }

  render(){
    console.log(this.props.match.params.id)
    if(!this.state.wine) return null

    const {name, image, price, origin, tastingNotes, location} = this.state.wine
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>
          <h4 className="title is-4">From {origin}</h4>
          <div className="columns">
            <div className="column">
              <figure className="image" style={{ backgroundImage: `url(${image})`}}>
              </figure>
            </div>
            <div className="column">

              <h4 className="title is-4">Tasting Notes</h4>
              <hr />
              <p> {tastingNotes}</p>
              <hr />
              <p> £{price}</p>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }


}

export default ShowWine
