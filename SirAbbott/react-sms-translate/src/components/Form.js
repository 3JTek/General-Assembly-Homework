import React from 'react'

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="message"
        placeholder="Enter your text here..."
        onChange={handleChange}/>
      <button>Send</button>
    </form>    
  )
}
export default Form
