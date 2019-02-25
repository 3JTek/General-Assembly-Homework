import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import WineForm from './WineForm'

class WineEdit extends React.Component{
  constructor(){
    super()

    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getWineData(){
    console.log(this.props.match.params.id)
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then( res =>{
        console.log(res)
        this.setState({ data: res.data })
      })
      .catch((err)=>console.log(err.message))
  }

  componentDidMount(){
    this.getWineData()
  }

  handleChange({ target: { name, value }}){
    let data
    if(name==='lat'||name==='lng') {
      data = { ...this.state.data, location: { [name]: value } }
    }else{
      data = { ...this.state.data, [name]: value }
    }
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state.data)
    axios
      .put(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`,
        this.state.data,
        { headers: { Authorization: `Bearer ${ Auth.getToken() }` } } )
      .then( (res) => {
        console.log(res)
        this.props.history.push(`/wines/${res.data._id}`)
      })
      .catch( (err) => alert(err.message))
  }

  render(){
    if(!this.state.data) return null
    console.log(this.state.data)
    return(
      <section className="section">
        <div className="container">
          <WineForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default WineEdit
