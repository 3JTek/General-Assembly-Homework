import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

class WinesNew extends React.Component {
  constructor() {
    super()

    this.state ={
      data: {
        name: '',
        origin: '',
        image: '',
        tastingNotes: '',
        grape: '',
        location: {
          lat: '',
          lng: ''
        },
        abv: '',
        price: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .post('https://winebored.herokuapp.com/wines',
        this.state.data,
        { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/wines'))
      .catch(err => alert(err.message))
  }

  handleChange({ target: {name, value}}) {
    let data
    if(name==='lat'||name==='lng') {
      data = { ...this.state.data, location: { [name]: value } }
    } else{
      data = { ...this.state.data, [name]: value }
    }
    this.setState({data})
  }

  render() {
    const { name, origin, image, tastingNotes, grape, abv, price, lat, lng} = this.state.data
    return(
      <section className='section'>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <h1 className="title is-1">New Wine</h1>

            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  name='name'
                  type="text"
                  placeholder="e.g Beefsteak Club Malbec 2016 Mendoza"
                  value={name}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Origin</label>
              <div className="control">
                <input
                  className="input"
                  name='origin'
                  type="text"
                  placeholder="e.g Argentine"
                  value={origin}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input
                  className="input"
                  name='image'
                  type="text"
                  placeholder="Image"
                  value={image}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Tasting Notes</label>
              <div className="control">
                <input
                  className="input"
                  name='tastingNotes'
                  type="text"
                  placeholder="e.g Woody"
                  value={tastingNotes}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Grape</label>
              <div className="control">
                <input
                  className="input"
                  name='grape'
                  type="text"
                  placeholder="e.g Pinot"
                  value={grape}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Abv</label>
              <div className="control">
                <input
                  className="input"
                  name='abv'
                  type="text"
                  placeholder="e.g 12%"
                  value={abv}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Price</label>
              <div className="control">
                <input
                  className="input"
                  name='price'
                  type="text"
                  placeholder="e.g 5.99"
                  value={price}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Location: lat</label>
              <div className="control">
                <input
                  className="input"
                  name='lat'
                  type="text"
                  placeholder="e.g 33"
                  value={lat}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Location: lng</label>
              <div className="control">
                <input
                  className="input"
                  name='lng'
                  type="text"
                  placeholder="e.g 66"
                  value={lng}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <button className="button is-info">Submit</button>

          </form>
        </div>
      </section>
    )
  }
}

export default WinesNew
