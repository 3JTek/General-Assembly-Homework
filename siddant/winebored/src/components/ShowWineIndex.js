import React from 'react'
import axios from 'axios'

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
            <h4>{wine.name}</h4>
          </div>
        )
        }
      </section>
    )
  }

}

export default ShowWineIndex
