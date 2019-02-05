import React from 'react'
import axios from 'axios'


class GelatosShow extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    axios.get(`/api/gelatos/${this.props.match.params.id}`)
      .then(res => this.setState({gelato: res.data}))

  }


  render(){
    if(!this.state.gelato)return null
    const {name,ingredients,price,flavour,extra} = this.state.gelato
    return(
      <section className= "section">
        <div className= "container">
          <h1 className="h2">{name}</h1>
          <div className= "container">
            <h2 className="h3">{ingredients}</h2>


            <h4 className="h4">Flavour</h4>
            <p> {flavour}</p>

            <h4 className="h4">Extra</h4>
            <p> {extra}</p>

            <h6 className="h6">Price</h6>
            <p> {price}</p>
          </div>
        </div>


      </section>
    )
  }
}

export default GelatosShow
