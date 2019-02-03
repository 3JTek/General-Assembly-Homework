import React from 'react'

const MessageForm = ({handleSubmit, handleChange, text, language, phone}) => {
  return(
    <form onSubmit={handleSubmit}>
      <input
        name="text"
        onChange={handleChange}
        value={text}
      />
      <input
        name="phone"
        onChange={handleChange}
        value={phone}
      />
      <input
        name="language"
        onChange={handleChange}
        value={language}
      />
      <button>Submit</button>
    </form>
  )
}

export default MessageForm
