import React from 'react'
import axios from 'axios'

class WinesShow extends React.Component {

  constructor(){
    super()

    this.state = {
    }
  }

  componentDidMount() {
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({ wines: res.data}))
  }

  render() {
    console.log(this.props)
    if(!this.state.wines) return null

    const{ name, origin, image, tastingNotes } = this.state.wines
    console.log(this.props)
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1"> {name}</h1>
          <h2 className="subtitle is-2"> {origin}</h2>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>

            <div className="column">
              <h4 className="title is-4"> Tasting Notes </h4>
              <p>{tastingNotes}</p>
              <hr />
            </div>

          </div>

        </div>
      </section>
    )
  }
}

export default WinesShow
