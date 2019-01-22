import React from 'react'
import axios from 'axios'

class Register extends React.Component {
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('https://winebored.herokuapp.com/register', this.state.data)
      .then(() => this.props.history.push('/wines'))
      .catch(err => alert(err.message))

  }


  handleChange({target: {name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
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
                className="input"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Email</label>
              <input
                className="input"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input
                className="input"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <input
                className="input"
                name="passwordConfirmation"
                type="password"
                placeholder="Confirm Password"
                value={passwordConfirmation}
                onChange={this.handleChange}
              />
            </div>
            <button className="button is-dark">Submit</button>
          </form>
        </div>
      </main>
    )
  }
}

export default Register
