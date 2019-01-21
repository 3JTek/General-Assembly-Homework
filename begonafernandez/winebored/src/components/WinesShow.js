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
    const { name, origin, image, tastingNotes } = this.state.wine
    return (
      <section className='section'>
        <div className='container'>
          <h1 className="title is-1">{name}</h1>
          <div className='columns'>
            <div className='column is-half'>
              <figure className='image'>
                <img src={image} alt={image}/>
              </figure>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WinesShow
