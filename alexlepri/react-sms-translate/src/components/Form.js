import React from 'react'

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label></label>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input is-large"
            placeholder="Phone number"
            onChange={handleChange}
          />
          <input
            className="input is-large"
            placeholder="Type your text here..."
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <button className="button is-large is-primary">SEND</button>
        </div>
      </div>
    </form>
  )
}

export default Form
