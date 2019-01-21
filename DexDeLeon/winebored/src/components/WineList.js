import React from 'react'

import axios from 'axios'

import WineCard from './WineCard'

class WineList extends React.Component {

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
      <section className="section wineList">
        <div className="container columns is-multiline">
          {wines.map(wine =>
            <div className="column is-half" key={wine._id}>
              <WineCard {...wine} />
            </div>
          )}
        </div>
      </section>
    )
  }

}

export default WineList
