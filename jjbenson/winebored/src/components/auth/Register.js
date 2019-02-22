import React from 'react'

import axios from 'axios'

class Register extends React.Component{
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
    this.handleSumbit = this.handleSumbit.bind(this)
  }

  handleChange({target: { name, value }}){
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSumbit(e){
    e.preventDefault()
    console.log('handleSubmit')
    axios
      .post('https://winebored.herokuapp.com/register', this.state.data)
      .then((res)=> {
        console.log(res)
        this.props.history.push('/wines')
      })
      .catch((err)=> alert(err.message))
  }

  render(){
    return(
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSumbit}>
            <h2 className="title"></h2>
            <div className="field">
              <div className="label">Username</div>
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
              <div className="label">Email</div>
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
              <div className="label">Password</div>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.data.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="label">Confirm Password</div>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirm Password"
                  value={this.state.data.passwordConfirmation}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className="button is-primary">Register</button>
          </form>
        </div>
      </main>
    )
  }
}

export default Register
