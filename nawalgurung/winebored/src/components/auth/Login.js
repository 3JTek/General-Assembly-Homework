import React from 'react'
import axios from 'axios'

// we need to import Auth comp because we need its method to set token
import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor(){
    super()

    this.state ={
      data: {
        email: '',
        password: ''
      }
    }
    // bind functions
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  //handle event listeners
  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .post('https://winebored.herokuapp.com/login', this.state.data)
      .then((res) => {
        console.log(res.data.token)
        Auth.setToken(res.data.token)
        this.props.history.push('/wines')
      })
      .catch(err => alert(err.message))
  }

  render() {
    return (
      <main className="section">
        <div className="container"> Login
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <div className="control">
    
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
              <div className="control">
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  value={this.state.data.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className="button is-info"> Login </button>
          </form>
        </div>
      </main>
    )
  }
}

export default Login
