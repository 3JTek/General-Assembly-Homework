import React from 'react'

import axios from 'axios'

import Auth from '../../lib/Auth'

class Login extends React.Component{
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

  handleChange({target: { name, value }}){
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('handleSubmit')
    axios
      .post('https://winebored.herokuapp.com/login', this.state.data)
      .then((res)=> {
        Auth.setToken(res.data.token)
        this.props.history.push('/cheeses')
      })
      .catch((err)=> alert(err.message))
  }

  render(){
    return(
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title"></h2>
            <div className="field">
              <div className="label">Email</div>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  value={this.state.data.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="label">Password</div>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.data.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className="button is-primary">Register</button>
          </form>
        </div>
      </main>
    )
  }
}

export default Login
