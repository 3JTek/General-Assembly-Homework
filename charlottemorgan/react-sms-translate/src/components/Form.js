import React from 'react'

const Form = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label className="label">To</label>
      <input
        name="to"
        placeholder="Who are you sending a text to?"
        onChange={handleChange}
      />
      <button>SEND</button>
    </form>

  )
}

export default Form
