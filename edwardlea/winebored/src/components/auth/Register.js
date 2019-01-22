import React from 'react'


class Register extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {

      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({target: { name, value }}){
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  render(){
    const { username, email, password, passwordConfirmation } = this.state.data

    return (
      <main className="section">
        <div className="container">
          <form>
            <h2 className="title is-2"> Register</h2>
            <div className="field">
              <div className="control">
                <label className="label">Username</label>
                <input
                  className="input"
                  placeholder="Username"
                  name="username"
                  value={username}
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

export default Register
