import React from 'react'

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Number</label>
        <input name="to" placeholder="Number" onChange={handleChange} />
      </div>
      <div>
        <label>Enter text here</label>
        <input name="message" placeholder="Type your text" onChange={handleChange} />
      </div>
      <div>
        <label>Enter language</label>
        <input name="lang" placeholder="Language" onChange={handleChange} />
      </div>

      <button>Submit</button>
    </form>
  )
}
export default Form
