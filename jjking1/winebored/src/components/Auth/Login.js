import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

class Login extends React.Component{
  constructor(){
    super()

    this.state={
      data: {
        email: '',
        password: '',
      }

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }){
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()

    axios
      .post('https://winebored.herokuapp.com/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/wines')
      })
      .catch(err => alert(err))
  }

  render(){
    return(
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h1 className="title is-1">Login</h1>
            <div className="field">
                <div className="control">
                  <input
                    onChange={this.handleChange}
                    className="input"
                    name="email"
                    placeholder="email"
                    value={this.state.data.email}
                  />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input
                  type="password"
                  className="input"
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Password"
                  value={this.state.data.password}
                />
              </div>
            </div>
            <button className=" button is-info"> Submit </button>
          </form>
        </div>
      </main>
    )
  }
}




export default Login
