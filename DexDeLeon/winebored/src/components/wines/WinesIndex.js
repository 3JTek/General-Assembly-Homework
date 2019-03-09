import React from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

import WineCard from './WineCard'

class WinesIndex extends React.Component {

  constructor(){
    super()

    this.state = {
      wines: []
    }
  }

  componentDidMount(){
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({ wines: res.data }))
      .catch(error => console.error('ERROR', error))
  }

  render(){
    const wines = this.state.wines
    return(
      <section className="section WinesIndex">
        <div className="container columns is-multiline">
          {wines.map(wine =>
            <Link to={`/wines/${wine._id}`} key={wine._id} className="column is-one-third">
              <WineCard {...wine} />
            </Link>
          )}
        </div>
      </section>
    )
  }

}

export default WinesIndex