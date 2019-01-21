import React from 'react'
import axios from 'axios'

import WineCard from './WineCard'

class WinesIndex extends React.Component{

  constructor(){
    super()

    this.state={}
  }

  componentDidMount(){
    axios.get('https://winebored.herokuapp.com/wines')
      .then((res)=>{
        this.setState({ wines: res.data})
      })
  }

  render(){
    if(!this.state.wines) return null
    console.log(this.state.wines)
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Wine List</h1>
          <hr />
          <div className="columns is-multiline">
            {
              this.state.wines.map((wine)=>
                <div  className="column is-one-quarter" key={wine._id}>
                  <WineCard {...wine}/>
                </div>
              )
            }
          </div>
        </div>
      </section>

    )
  }

}

export default WinesIndex
