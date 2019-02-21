import React from 'react'
import axios from 'axios'


import { Route, Link, Switch } from 'react-router-dom'
import WinesEdit from './WinesEdit'

class WineShow extends React.Component {
  constructor() {
    super()
    this.state = {}


  }


  componentDidMount() {
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`) // <== fix this
      .then(res => this.setState({ wine: res.data }))
  }

  render() {
    if(!this.state.wine) return null
    //console.log('this.state.wine = ' + this.state.wine)

    const { name, image, origin, abv, price, tastingNotes } = this.state.wine

    return (
      <section className="section">
        <div className="container">

          <h1 className="title is-1">{name}</h1>
          <hr />

          <div className='columns'>
            <div className='column'>
              <img src={image} alt={name} />
            </div>
          </div>

          <div className='column'>
            <h4 className='title is-4'>Origin: {origin} </h4>
            <h4 className='title is-4'>ABV: {abv} </h4>
            <h4 className='title is-4'>Price: {price} </h4>
            <div className='content'>
              {tastingNotes}
            </div>
          </div>

          <Link to="/wines/edit"> Edit wine</Link>
          <Switch>
            <Route path="/wines/" component={WinesEdit} />
          </Switch>
        </div>
      </section>
    )
  }
}



export default WineShow
