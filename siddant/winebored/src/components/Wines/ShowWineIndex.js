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
        <div className="container">
          <div className="columns is-multiline">
            {this.state.wines.map(wine =>
              <div key={wine._id} className="column is-one-third">
                <WinesCard
                  {...wine}
                />
              </div>
            )
            }
          </div>
        </div>
      </section>
    )
  }

}

export default ShowWineIndex
