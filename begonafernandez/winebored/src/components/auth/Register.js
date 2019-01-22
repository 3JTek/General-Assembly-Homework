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

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target: {name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }


  handleSubmit(e) {
    e.preventDefault()

    axios
      .post('https://winebored.herokuapp.com/register', this.state.data)
      .then(() => this.props.history.push('/cheeses'))
      .catch(err => alert(err.message))
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state.data
    return(
      <section className='section'>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <h1 className="title is-1">Register</h1>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  name='username'
                  type="text"
                  placeholder="e.g Alex Smith"
                  value={username}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <label className="label">Email</label>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name='email'
                  type="text"
                  placeholder="e.g. alexsmith@gmail.com"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <label className="label">Password</label>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name='password'
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <label className="label">Password Confirmation</label>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name='passwordConfirmation'
                  type="password"
                  placeholder="Password"
                  value={passwordConfirmation}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <button className="button is-info">Submit</button>

          </form>
        </div>
      </section>
    )
  }
}




export default Register
