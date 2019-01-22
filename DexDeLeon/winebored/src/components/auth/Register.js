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
  }

  handleChange({ target: { name, value } }){
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  render(){
    return (
      <main className="section">
        <div className="container">
          <form>

            <div className="field">
              <label className="label title is-4">Username</label>
              <div className="control">
                <input
                  className="input"
                  name="username"
                  placeholder="Username"
                  value={this.state.data.username}
                  onChange={this.handleChange}
                />
              </div>
            </div>

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

            <div className="field">
              <label className="label title is-4">Password Confirmation</label>
              <div className="control">
                <input
                  className="input"
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  type="password"
                  value={this.state.data.passwordConfirmation}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <button className="button is-light">Register</button>

          </form>
        </div>
      </main>
    )
  }

}

export default Register
