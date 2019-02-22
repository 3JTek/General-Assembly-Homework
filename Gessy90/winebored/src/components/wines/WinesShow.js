import React from 'react'
import axios from 'axios'


class WinesShow extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({wine: res.data}))

  }


  render(){
    if(!this.state.wine)return null
    const {name,origin,image,tastingNotes} = this.state.wine
    return(
      <section className= "section">
        <div className= "container">
          <h1 className="h2">{name}</h1>
          <hr />
          <div className= "columns">
            <div className= "column">
              <figure className= "image">
                <img src={image} alt={name}/>
              </figure>
            </div>

            <div className= "column">
              <h4 className="h4">{origin}</h4>
              <hr />

              <h4 className="h4">Tasting Notes</h4>
              <p> {tastingNotes}</p>
              <hr />

            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default WinesShow
