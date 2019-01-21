import React from 'react'
import axios from 'axios'

import WinesCard from './WinesCard'


class ShowWineIndex extends React.Component {

  constructor(){
    super()
    this.state = {
      wines: []
    }
  }

  componentDidMount(){
    axios.get('http://winebored.herokuapp.com/wines')
      .then(res => this.setState({ wines: res.data }))
  }
  render(){
    return(
      <section className="section">
        {this.state.wines.map(wine =>
          <div key={wine._id}>
            <WinesCard {...wine} />
          </div>
        )
        }
      </section>
    )
  }

}

export default ShowWineIndex
