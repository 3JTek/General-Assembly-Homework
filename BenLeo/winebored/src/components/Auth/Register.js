import React from 'react'
import axios from 'axios'

class Register extends React.Component{
  constructor() {
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

  handleChange() {

  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state.data
    return(
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Register</h2>
            <div className="field">
              <label className="label">Username</label>
              <input
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Email</label>
              <input
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <input
                type="password"
                name="passwordConfirmation"
                placeholder="Password Confirmation"
                value={passwordConfirmation}
                onChange={this.handleChange}
              />
            </div>
            <button className="button is-info">Submit</button>
          </form>
        </div>
      </main>
    )
  }
}
