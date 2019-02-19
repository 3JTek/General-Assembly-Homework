import React from 'react'

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="to"
        placeholder="Who are you sending a text to?"
        onChange={handleChange}
      />
      <input
        name="message"
        type="textarea"
        placeholder="Write your text here"
        onChange={handleChange}
      />
      <input
        name="language"
        placeholder="what language to do want to send it it?"
        onChange={handleChange}
      />
      <button>SEND</button>
    </form>

  )
}

export default Form
