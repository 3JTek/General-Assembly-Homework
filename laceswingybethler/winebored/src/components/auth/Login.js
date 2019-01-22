import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

//class component because it will need state
class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('https://winebored.herokuapp.com/login', this.state.data)
      // .then((res) => console.log(res))
      .then((res) => {
        Auth.setToken(res.data.token)
        this.props.history.push('/wines')
      })
      .catch(err => alert(err.message))
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  value={this.state.data.email}
                  onChange={this.handleChange}>
                </input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.data.password}
                  onChange={this.handleChange}>
                </input>
              </div>
            </div>
            <div className="field">
              <button className="button is-info">Submit</button>
            </div>
          </form>
        </div>
      </main>
    )
  }

}


export default Login
