import React from 'react'
import axios from 'axios'

import GelatoCard from './GelatoCard'

class GelatosIndex extends React.Component {
  constructor(){
    super()
    this.state = {
      gelatos: []
    }
  }


  componentDidMount(){
    axios.get('/api/gelatos')
      .then(res => this.setState({gelatos: res.data}))
  }


  render(){
    return(
      <section className= "section">
        <div className= "container">

          <div className= "columns is-multiline">

            {this.state.gelato.map(gelato =>
              <div className="column is-one-quarter" key={gelato._id}>
                <GelatoCard {...gelato} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default GelatosIndex
