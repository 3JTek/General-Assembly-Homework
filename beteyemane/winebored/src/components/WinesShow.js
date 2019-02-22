import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'


class WineboardsShow extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }

  componentDidMount() {
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({wine: res.data}))
  }

  render () {
    if (!this.state.wine) return null
    const { name, image, tastingNotes, price } = this.state.wine
    return(
      <section className="section">
        <div className='container'>
          <h1 className="title is-size-2">{name}</h1>
          < hr/>
          <div className="columns">
            <div className="column is-centered">
              <img src={image} alt={image}/>
            </div>

            <div className="column">
              <h4 className="title is-4">Tasting Notes</h4>
              <p>{tastingNotes}</p>

              <hr />
              <h4 className="title is-4">Price</h4>
              <p>{price}</p>
              <hr />
              <Link to="/wines/edit" className="is-size-5 button is-danger">
                <strong>Edit</strong>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WineboardsShow
