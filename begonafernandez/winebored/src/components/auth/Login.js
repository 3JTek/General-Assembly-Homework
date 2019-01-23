import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .post('https://winebored.herokuapp.com/login', this.state.data)
      .then((res) =>{
        Auth.setToken(res.data.token)
        this.props.history.push('/wines')
      })
      .catch(err => alert(err))
  }

  handleChange({target: {name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  render() {
    const {  email, password } = this.state.data
    return(
      <section className='section'>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <h1 className="title is-1">Login</h1>
            <div className="field">
              <label className="label">Email</label>
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

            <button className="button is-info">Submit</button>

          </form>
        </div>
      </section>
    )
  }
}

export default Login
