import React from 'react'

import axios from 'axios'

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
              <div className="card">
                <div className="card-header">
                  <h3 className="card-header-title">{wine.name}</h3>
                </div>
                <div className="card-image">
                  <figure className="image">
                    <img src={wine.image} alt={wine.name} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    {wine.tastingNotes}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }

}

export default WineList
