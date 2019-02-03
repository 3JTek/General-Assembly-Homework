import React from 'react'


const Form = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter your mobile number"
        onChange={handleChange}>
      </input>
      <input
        placeholder="Language eg. ru for Russian"
        onChange={handleChange}>
      </input>
      <textarea
        placeholder="Type your message here"
        onChange={handleChange}>
      </textarea>
      <button>Send</button>
    </form>
  )
}

export default Form
