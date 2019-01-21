import React from 'react'

import axios from 'axios'

import WineCard from './WineCard'

class WinesIndex extends React.Component{

  constructor(){
    super()
  }

  componentDidMount(){
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({wines: res.data}))
      .catch(err => console.log(err.message))
  }

  render(){
    if(!this.state) return false
    return(
      <div>
        {this.state.wines.map(wine =>
          <div key={wine._id}>
            <WineCard {...wine} />
          </div>
        )}
      </div>
    )
  }
}

export default WinesIndex
