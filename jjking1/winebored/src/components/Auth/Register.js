import React from 'react'
import axios from 'axios'



class Register extends React.Component{
  constructor(){
    super()

    this.state={
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

  handleChange({ target: { name, value } }){
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()
    axios
      .post('https://winebored.herokuapp.com/register', this.state.data)
      .then(() => this.props.history.push('/wines'))
      .catch(err => alert(err))
  }

  render(){
    return(
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title is-2"> Register </h2>
            <div className="field">
              <label className="label"> Username</label>
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
              <div className="control">
                <label className="label"> Email</label>
                <input
                  className="input"
                  name="email"
                  placeholder="email"
                  value={this.state.data.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
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
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  value={this.state.data.passwordConfirmation}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </main>
    )
  }
}

export default Register
