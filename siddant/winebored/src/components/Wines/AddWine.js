import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'


class AddWine extends React.Component {

  constructor(){
    super()
    this.state = {
      data: {
        name: '',
        origin: '',
        image: '',
        tastingNotes: '',
        grape: '',
        abv: '',
        price: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: {name, value}}){
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  handleSubmit(e){
    e.preventDefault()
    //http://winebored.herokuapp.com/register
    console.log(this.state.data)
    axios
      .post('http://winebored.herokuapp.com/wines', this.state.data,
        {
          headers: { Authorization: `Bearer ${Auth.getToken()}`}
        }
      )
      .then((res) => {
        alert(res.message)
        console.log('added')
      })
      .catch(err => console.log(err))
  }

  render(){
    const{name, origin,image,tastingNotes,grape,abv,price} = this.state.data
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Add New Wines</h1>
          <form onSubmit={this.handleSubmit}>

            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" onChange={this.handleChange} placeholder="Wine Name" name="name" value={name}/>
              </div>
            </div>

            <div className="field">
              <label className="label">Origin</label>
              <div className="control">
                <input className="input" type="text"onChange={this.handleChange} placeholder="Origin" name="origin" value={origin}/>
              </div>
            </div>


            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input className="input" type="text" onChange={this.handleChange} placeholder="Image" name="image" value={image}/>
              </div>
            </div>

            <div className="field">
              <label className="label">Grapes</label>
              <div className="control">
                <input className="input" type="text" onChange={this.handleChange} placeholder="Grapes" name="grape" value={grape}/>
              </div>
            </div>

            <div className="field">
              <label className="label">Alcohol by Volume</label>
              <div className="control">
                <input className="input" type="number"onChange={this.handleChange} placeholder="0" name="abv" value={abv} min="0" />
              </div>
            </div>

            <div className="field">
              <label className="label">Wine Price</label>
              <div className="control">
                <input className="input" type="number" onChange={this.handleChange} placeholder="0" name="price" value={price} min="0" />
              </div>
            </div>

            <div className="field">
              <label className="label">Tasting Notes</label>
              <div className="control">
                <textarea className="textarea" type="text" onChange={this.handleChange} placeholder="Tasting Notes" name="tastingNotes" value={tastingNotes}/>
              </div>
            </div>

            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default AddWine
