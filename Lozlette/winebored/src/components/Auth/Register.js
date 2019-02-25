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
  //see comments in login. Same function.
  handleChange({target: {name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  //see comments in login. Same function.
  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('https://winebored.herokuapp.com/register', this.state.data)
      .then(() => this.props.history.push('/wines'))
      .catch(err => alert(err.message))
  }




  // username, email, password etc from state are set as variables in the function
  render(){
    const { username, email, password, passwordConfirmation } = this.state.data
    return(
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Register</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
              </div>
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
            <button className="button is-dark">Submit</button>
          </form>
        </div>
      </main>
    )
  }
}

export default Register
