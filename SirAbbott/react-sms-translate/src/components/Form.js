import React from 'react'

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <input
          className="input is-large is-primary"
          type="text"
          name="message"
          placeholder="Enter your text here..."
          onChange={handleChange}/>
        <div className="control">
          <button className="button is-large is-primary is-outlined">TRANSLATE & SMS</button>
        </div>
      </div>
    </form>
  )
}
export default Form
