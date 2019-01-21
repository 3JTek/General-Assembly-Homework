import React from 'react'
import axios from 'axios'

import WineCard from './WineCard'


class WineIndex extends React.Component{
  constructor(){
    super()

    this.state={}
  }

  componentDidMount(){
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({ wines: res.data }))

  }


  render(){
    if(!this.state.wines) return null
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">

            {this.state.wines.map(wine =>

                <div className="column is-full" key={wine._id}>
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
