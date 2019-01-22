import React from 'react'

import axios from 'axios'

class Login extends React.Component{
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
          <form>
            <h2 className="title"></h2>
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
          </form>
        </div>
      </main>
    )
  }
}

export default Login
