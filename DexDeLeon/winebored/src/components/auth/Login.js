import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        username: '',
        email: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()

    axios.post('https://winebored.herokuapp.com/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/wines')
      })
      .catch(error => alert(error))
  }

  handleChange({ target: { name, value } }){
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  render(){
    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>

            <div className="field">
              <label className="label title is-4">Email</label>
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
              <label className="label title is-4">Password</label>
              <div className="control">
                <input
                  className="input"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={this.state.data.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <button className="button is-light">Login</button>

          </form>
        </div>
      </main>
    )
  }

}

export default Login
