import React from 'react'

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <h1 className="title has-text-centered"> React SMS-TRANSLATE</h1>
      <form onSubmit={handleSubmit}>
        <label>Please enter phone number...</label>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-large"
              placeholder="Phone number"
              onChange={handleChange}
            />
            <label>Enter you text...</label>
            <input
              className="input is-large"
              placeholder="Type your text here..."
              onChange={handleChange}
              name="message"
            />
            <label>Choose your language</label>
            <input
              className="input is-small"
              placeholder="Please select your language..."
              onChange={handleChange}
              name="lang"
            />
          </div>
          <div className="control">
            <button className="button is-large is-danger">SEND</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
