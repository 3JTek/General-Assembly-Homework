import React from 'react'

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label> Send translated text message </label>
      <div className="field">
        <div className="control">
          <input
            className="textarea"
            placeholder="Type your message"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input
            className="input"
            placeholder="your number"
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input
            className="input"
            type="tel"
            placeholder="send to number"
          />
        </div>
      </div>

      <button className="button is-medium is-primary">Submit</button>
    </form>
  )
}

export default Form
