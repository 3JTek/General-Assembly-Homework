import React from 'react'
import axios from 'axios'

import WineCard from './WineCard'


class WineIndex extends React.Component{
  constructor(){
    super()

    this.state={
      wines: []
    }
  }

  componentDidMount(){
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({ wines: res.data }))

  }


  render(){
    return(
      <section className="section columns">
        <div className="container column is-6">
          <div className="columns is-multiline">

            {this.state.wines.map(wine =>

                <div className="column is-half" key={wine._id}>
                    <WineCard {...wine} />
                </div>

              )}

          </div>
        </div>
      </section>
    )
  }
}

export default WineIndex
