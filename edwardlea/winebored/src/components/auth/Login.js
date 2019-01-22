import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'


class Login extends React.Component {
  constructor(){
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

  handleChange({target: { name, value }}){
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  handleSubmit(e){
    e.preventDefault()
    axios
      .post('https://winebored.herokuapp.com/login', this.state.data)
      .then((res) => {
        console.log(res)
        Auth.setToken(res.data.token)
        this.props.history.push('/wines')
      })
      .catch(err => alert(err.message))
  }


  render(){
    const { email, password } = this.state.data

    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title is-2"> Login</h2>
            <div className="field">
              <div className="control">
                <label className="label">Email</label>
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="label">Password</label>
                <input
                  className="input"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className="button is-dark">Login</button>
          </form>
        </div>
      </main>
    )

  }





}

export default Login
