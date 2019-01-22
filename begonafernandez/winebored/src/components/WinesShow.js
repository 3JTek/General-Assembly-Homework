import React from 'react'
import axios from 'axios'

class WinesShow extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({wine: res.data}))
  }

  render() {
    if (!this.state.wine) return null
    const { name, grape, origin, price, image, tastingNotes, abv } = this.state.wine
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <figure className='image'>
                <img src={image} alt={image}/>
              </figure>
            </div>
            <div className='column'>
              <h1 className="title is-1">{name}</h1>
              <h2 className="title is-2">{grape}</h2>
              <div className="columns">
                <div className="column ">
                  <h4 className='title is-4'>Abv: {abv}%</h4>
                </div>
                <div className="column">
                  <h4 className='title is-4'>{origin}</h4>
                </div>
              </div>
              <p>{tastingNotes}</p>
              <hr />
              <h5 className="title is-5">£{price}</h5>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WinesShow
