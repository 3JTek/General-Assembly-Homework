import React from 'react'
import axios from 'axios'

class Register extends React.Component {

  constructor(){
    super()
    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
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
    e.preventDefault(e)
    axios
      .post('http://winebored.herokuapp.com/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => alert(err.message))
  }

  render(){
    const{username, email, password, passwordConfirmation} = this.state.data
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Registration</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Username" name="username" onChange={this.handleChange} value={username}/>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="text" placeholder="Email" name="email" onChange={this.handleChange} value={email}/>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" placeholder="Password" name="password" onChange={this.handleChange} value={password}/>
              </div>
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input className="input" type="password" placeholder="Password Confirmation" name="passwordConfirmation" onChange={this.handleChange} value={passwordConfirmation}/>
              </div>
            </div>
            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Register